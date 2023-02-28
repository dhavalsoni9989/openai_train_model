const { Configuration, OpenAIApi } = require('openai');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDefinition = require('./docs/swaggerDef');

require('dotenv').config();

const app = express();
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const specs = swaggerJsdoc({
    swaggerDefinition,
    apis: ['src/docs/*.yml', 'src/docs/*.js'],
});
app.use('/', swaggerUi.serve);
app.get(
    '/',
    swaggerUi.setup(specs, {
        explorer: true,
    }),
);

app.get('/list-files', async (req, res) => {
    const response = await openai.listFiles();
    res.status(200).json({
        message: 'Successfully List Files',
        response: response.data,
    });
});

app.get('/list-fine-tunes', async (req, res) => {
    const response = await openai.listFineTunes();
    res.status(200).json({
        message: 'Successfully List Fine Tunes',
        response: response.data,
    });
});

app.get('/fine-tune/:id', async (req, res) => {
    const fineTune = req.params.id;
    const response = await openai.retrieveFineTune(fineTune);
    res.status(200).json({
        message: 'Successfully Fine Tunes',
        response: response.data,
    });
});

app.post('/train-model', async (req, res) => {
    const responseFile = await openai.createFile(
        fs.createReadStream('mydata.jsonl'),
        'fine-tune',
    );
    console.log('responseFile ::::: ', JSON.stringify(responseFile, null, 4));
    const trainFileName = responseFile.data.filename;
    const response = await openai.createFineTune({
        training_file: trainFileName,
    });
    res.status(201).json({
        message: 'Successfully Train Model',
        response: response.data,
    });
});

app.post('/completion', async (req, res) => {
    return openai
        .createCompletion({
            model: 'text-davinci-003',
            prompt: req.body.query,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((response) => {
            return res.status(200).json({
                message: 'Successfully Fetch Completion text',
                response: response.data.choices[0].text,
            });
        });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
