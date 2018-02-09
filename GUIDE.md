## Project Guide



1. Create repositories, support and config files. Install atom packages for react.

```
git init
mkdir src
mkdir src/components
touch .gitignore template.ejs  webpack.config.js src/index.jsx src/components/App.jsx
npm init
apm i react@0.16.2
```
atom packages:
```
monokai theme 😎
language-babel
linter-eslint
```

.gitignore:
```
.DS_STORE
node_modules
build
```
2. Install webpack, React, ReactDOM, propTypes, babel transpiler, linter, webpack server, HMR, weback eslint loader, and style jsx.
```
npm install webpack@3.4.0 webpack-dev-server@2.5.0 eslint eslint-plugin-react -g   
```
```
npm install react@15.5.4 react-dom@15.5.4 prop-types@15.5.10 --save
```
```
npm install webpack@3.4.0 babel-core@6.24.1 babel-loader@7.0.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1 webpack-dev-server@2.5.0 react-hot-loader@3.0.0-beta.7 html-webpack-plugin@2.29.0 eslint-loader --save-dev
```
```
npm install --save styled-jsx
```

3. Configure .eslintrc.json, template.ejs, webpack.config
 * Copy config files from practice repo
 * webpack-dev-server
 * npm run start
 * npm run lint
 * npm run lint-fix

4. Set up index.jsx with hash router and HMR. Create more components. Create component tree.

5. Set up App component with Switch. Test routing between components.

7. Wireframe style of components

6. Create data model component and iterate data into the view.

8. Refine style of components and resolve issues.
