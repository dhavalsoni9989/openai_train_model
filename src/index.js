const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/list-files", async (req, res) => {
    const response = await openai.listFiles();
    res.status(200).json({
        message: "Successfully List Files",
        response: response.data,
    });
});

app.get("/list-fine-tunes", async (req, res) => {
    const response = await openai.listFineTunes();
    res.status(200).json({
        message: "Successfully List Fine Tunes",
        response: response.data,
    });
});

app.get("/find-tune/:id", async (req, res) => {
    const fineTune = req.params.id;
    const response = await openai.retrieveFineTune(fineTune);
    res.status(200).json({
        message: "Successfully Fine Tunes",
        response: response.data,
    });
});

app.post("/train-model", async (req, res) => {
    const responseFile = await openai.createFile(
        fs.createReadStream("mydata.jsonl"),
        "fine-tune"
    );
    console.log("responseFile ::::: ", JSON.stringify(responseFile, null, 4));
    const trainFileName = responseFile.data.filename;
    const response = await openai.createFineTune({
        training_file: trainFileName,
    });
    res.status(201).json({
        message: "Successfully Train Model",
        response: response.data,
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});