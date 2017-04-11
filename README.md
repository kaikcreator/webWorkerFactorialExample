# TestWebWorkers

This project is a sample demo to understand changes between running angular 2 in a single thread and doing so using webworkers

>NOTE: This project was generated with an old version of Angular CLI that didn't allow you to generate the webpack config. 
**If you're a lucky guy working with Angular CLI v1.0 or higher, please, check [this other repo](https://github.com/kaikcreator/angular-cli-web-worker)**, that make things easier.

Also [check this Stack Overflow detailed instructions](http://stackoverflow.com/questions/43276044/angular-cli-generated-app-with-web-workers/43276045#43276045) about how to do the migration from Angular single threaded project to use webworkers, step by step.


## Install

After downloading the code, run `npm install` to install dependencies.


## Run in single_thread

The master branch already includes the "single_thread" version so:

Run `npm start`. This will execute the webpack dev server in http://localhost:8080


## Run using webworkers

Move to GIT `webWorkers` branch.

The package.json file has been updated to use `webpack --watch` and a [simplehttpserver](https://www.npmjs.com/package/simplehttpserver) dev server, because webpack-dev-server causes an error when using Web Workers. 

So first you need to install *simplehttpserver* in case you don't already have it:

```bash
npm install -g simplehttpserver
```

Then run `npm start`. This will execute webpack in watch mode, and *simplehttpserver* in parallel using http://localhost:8080
