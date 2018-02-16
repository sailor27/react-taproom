## Project Guide

2-16-18

1. Restructure component tree to include admin component area. Admin area will include copy of ticket list, and route to add keg child component.

2. Create Admin component and route to admin component from app in header

3. Display new keg form in admin route and style.

4. Lift state to app component, and pass masterkeglist data into kegList.

5. Pass masterkeglist data into admin and use to render keglist

6. Conditionally render remaining prop in admin route only


7. Install UUID package and import into App
---
8. Create handler method in App for adding kegs and pass down to Admin and NewKegForm components.

9. Assign refs to inputs in form and define these variables as null to start.

10. Create handler method in NewKegForm to assign refs to values in passed-down keg adding handler method. Call submission handler method onSubmit. See added keg info in menu and admin list!

11. Add kegId property to kegs set to keg key. Plan steps to implement editing kegs.

12. Create handleKegSelection func and send to Admin. Create selectedKeg prop in state, set to null, and send to Admin.

13. Send onKegSelection func from Admin to KegList, and from Keglist to Keg as props. Call onKegSelection function on "Edit" button click on Keg component. Console log selectedKeg in admin and get correct kegId.

12. Edit Keg~!

11. Use local state in admin to show form when "add new keg" is clicked
12. Fix background CSS to cover entire page, add gradient overlay.









------------------------------------
 ### Objectives

 This week progress on this multiple-week independent project will be checked using the following objectives:

* Development environment is fully-functional, including Babel transpiling, Webpack module bundling, a development server with hot module replacement, and linting.
* Components are used to create modular UI elements.
propTypes define data types and shapes for all component props.
* Application successfully uses client-side routing via the
* React-Router library to create appearance of multiple pages.
* Styles are successfully added using CSS objects.
* Project was submitted by the Friday deadline.
* Project demonstrates an understanding of this week's concepts.
* If prompted, you can discuss your code with an instructor using the correct terminology.


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
npm install react@15.5.4 react-dom@15.5.4 react-router-dom prop-types@15.5.10 --save
```
```
npm install webpack@3.4.0 babel-core@6.24.1 babel-loader@7.0.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1 webpack-dev-server@2.5.0 react-hot-loader@3.0.0-beta.7 html-webpack-plugin@2.29.0 eslint eslint-plugin-react eslint-loader  url-loader@0.6.2 file-loader@1.1.6 --save-dev
```
```
npm install --save styled-jsx
```

3. Configure .eslintrc.json, template.ejs, webpack.config
 * Copy config files from practice repo
 * eslint --init (set up eslint config file)
 * webpack-dev-server
 * npm run start
 * npm run lint
 * npm run lint-fix

4. Set up index.jsx with hash router and HMR. Set up App component with Switch. Create Keg List component. Test routing between components.

5. Create data model component and iterate data into the view.

6. Create data model component and iterate data into the view.

7. Wireframe style of components.

8. Refine style of components and resolve issues.
