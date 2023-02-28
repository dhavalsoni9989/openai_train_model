# Node - OpenAI Train Model

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

![alt text](https://github.com/dhavalsoni9989/openai_train_model/blob/3d68633a15c3eecd55f6166eb3b153a93123e056/public/openai.png?raw=true)

This project has been template and mvc structure for crud operations.

https://replit.com/@dhavalsoni9989/openaitrainmodel?v=1

## Here is the working example

https://replit.com/@dhavalsoni9989/openaitrainmodel?v=1

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
npm install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Available scripts

Running locally:

```bash
# Start Project

npm start

```

Linting:

```bash
# run ESLint
npm lint

# fix ESLint errors
npm lint:fix

# run prettier
npm prettier

# fix prettier errors
npm prettier:fix
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
`POST /completion` - OpenAI Completion code

### Sample Code for OpenAI Completion

```javascript
try {
    const completion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: 'Hello world',
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    console.log(completion.data.choices[0].text);
} catch (error) {
    if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
    } else {
        console.log(error.message);
    }
}
```

## Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

In this app, ESLint is configured to follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with some modifications. It also extends [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with Prettier.

To modify the ESLint configuration, update the `.eslintrc.json` file. To modify the Prettier configuration, update the `.prettierrc` file.

To prevent a certain file or directory from being linted, add it to `.eslintignore` and `.prettierignore`.

To maintain a consistent coding style across different IDEs, the project contains `.editorconfig`

## Contributing

Contributions are more than welcome! Please check out the [contributing guide](CONTRIBUTING.md).

## License

[MIT](LICENSE)
