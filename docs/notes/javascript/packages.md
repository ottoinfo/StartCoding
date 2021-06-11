# Packages

In programing you will want to take advantage of code or frameworks that other developers have released to the public. 

The old way would be have `<script>` tags that import a javascript file.

```javascript
<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
```

This can work, but sometimes you will not be using a browser or you may not want the overhead of downloading a huge file on the clientside.

The next option is download the file and place it into your project. You would most likely place this file in a folder called `vendors`.

But over the past 10+ years the standard has been to use a package manager. This is not just common to javascript, but to many languages. The standard is to use [NPM](https://www.npmjs.com/) ( Node Package Manager released January 2010 ) to search for projects/repos. NPM is a registry for developers to host and serve there code for other developers to use.

> npm makes it easy for JavaScript developers to share and reuse code, and makes it easy to update the code that you’re sharing, so you can build amazing things.






```javascript
npm

yarn 

npx
```

### Installing and Initialization

To check if you have Node.js installed, run this command in your terminal:

`node -v`

To confirm that you have npm installed you can run this command in your terminal:

`npm -v`

You may want to upgrade your npm, we are using `-g` for GLOBAL

`npm install npm@latest -g`


### Node Version Manager

Use a Node.js version manager 


### Dependency vs DevDependency

```javascript
{
  "name": "",
  "version": "1.0.0",
  "description": "",
  "keywords": [],
  "main": "index.js",
  "dependencies": {},
  "devdependencies: {}
}
```