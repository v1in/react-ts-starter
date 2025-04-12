# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

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

## Available Scripts

### `npm i`

Installs package dependencies:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run lint` and `npm run lint:fix`

Launches the lint and fix all issues.

## Husky 🐶

Install: `npm i -D husky lint-staged pretty-quick`

Then one-time command to quickly initialize a project with husky:

`npx husky-init`

Finally, update the hook:

> ~/.husky/pre-commit

`npm test` to `npx lint-staged && npx pretty-quick --staged`

More information: https://typicode.github.io/husky/
