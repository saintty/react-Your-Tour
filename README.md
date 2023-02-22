# Webpack + React project boilerplate
----

##Before the start
___`npm i`___ to initialize project
##Available scripts:
- ___`npm run start`___ - start project in development mode on localhost:3000
- ___`npm run prebuild`___ - remove `./build` production folder
- ___`npm run build`___ - build production version in `./build` folder


##Processes files:
- ___`*.html`___
- ___`*.js`___ and ___`*.jsx`___
- ___`*.css`___ ___`*.scss`___ and ___`*.sass`___
- ___`*.png`___ ___`*.jpg`___ ___`*.jpeg`___ ___`*.svg`___ ___`*.gif`___

Entry point of project is _`public/index.html`_ file. All necessary files (_`robots.txt`_, _`favicon.ico`_, _`manifest.json`_ etc) must be placed in _`public`_ folder.

Only _`src/`_ folder filling up during development. HMR (hot-module-replacement) style is used.

Production version compresses _`bundle.js`_ and removes component`s prop validation. Pictures are minified.