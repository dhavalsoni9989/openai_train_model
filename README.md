# Node - OpenAI Train Model

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

![alt text](https://github.com/dhavalsoni9989/openai_train_model/blob/3d68633a15c3eecd55f6166eb3b153a93123e056/public/openai.png?raw=true)

This project has been template and mvc structure for crud operations.

## Using NPM

-   Run `npm i` to install the project dependencies

## Manual Installation

If you would still prefer to do the installation manually, follow these steps:

Clone the repo:

```bash
git clone --depth 1 https://github.com/dhavalsoni9989/openai_train_model.git
cd openai_train_model
npx rimraf ./.git
```

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Available scripts

```bash
# Start Project

npm start

```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3000

# OpenAI API key
OPENAI_API_KEY=sk-XXXXX
```

### API Endpoints

List of available routes:

**Auth routes**:\
`GET /list-files` - List Uploaded Files\
`GET /list-fine-tunes` - List Fine Tunes\
`GET /fine-tune/:id` - Get Particular Fine Tune with id\
`POST /train-model` - Train OpenAI Model\
`POST /completion` - Train OpenAI Model

## Contributing

Contributions are more than welcome! Please check out the [contributing guide](CONTRIBUTING.md).
