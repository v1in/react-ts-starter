# react-ts-starter

React starter with typescript.

<p>
    <p>
        <a aria-label="License" href="https://github.com/v1in/react-starter-typescript/blob/main/LICENSE">
            <img alt="" src="https://img.shields.io/github/license/v1in/react-starter-typescript">
        </a>
        <a aria-label="Version" href="https://github.com/v1in/react-starter-typescript/blob/main/package.json">
            <img alt="" src="https://img.shields.io/github/package-json/v/v1in/react-starter-typescript">
        </a>
    </p>
    <a aria-label="NPM version" href="https://www.npmjs.com/package/react">
        <img alt="" src="https://img.shields.io/npm/v/react.svg?style=flat&labelColor=000000&label=react">
    </a>
    <a aria-label="NPM version" href="https://www.npmjs.com/package/typescript">
        <img alt="" src="https://img.shields.io/npm/v/typescript.svg?style=flat&labelColor=000000&label=typescript">
    </a>
    <a aria-label="NPM version" href="https://www.npmjs.com/package/eslint">
        <img alt="" src="https://img.shields.io/npm/v/eslint.svg?style=flat&labelColor=000000&label=eslint">
    </a>
    <a aria-label="NPM version" href="https://www.npmjs.com/package/prettier">
        <img alt="" src="https://img.shields.io/npm/v/prettier.svg?style=flat&labelColor=000000&label=prettier">
    </a>
    <a aria-label="NPM version" href="https://www.npmjs.com/package/husky">
        <img alt="" src="https://img.shields.io/npm/v/husky.svg?style=flat&labelColor=000000&label=husky">
    </a>
</p>

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm i`

Installs package dependencies:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint` and `npm run lint:fix`

Launches the lint and fix all issues.

## Husky 🐶

Install: `npm i -D husky lint-staged pretty-quick`

Then one-time command to quickly initialize a project with husky:

`npx husky-init && npm install`

Finally, update the hook:

> ~/.husky/pre-commit

`npm test` to `npx lint-staged && npx pretty-quick --staged`

More information: https://typicode.github.io/husky/

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
