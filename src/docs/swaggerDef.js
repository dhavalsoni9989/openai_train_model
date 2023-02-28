const { version } = require('../../package.json');

const swaggerDef = {
    openapi: '3.0.0',
    info: {
        title: 'OpenAI Train Model API documentation',
        version,
        license: {
            name: 'MIT',
            url: 'https://github.com/dhavalsoni9989/openai_train_model/blob/main/LICENSE.md',
        },
    },
    servers: [
        {
            url: `http://localhost:3000`,
        },
    ],
};

module.exports = swaggerDef;
