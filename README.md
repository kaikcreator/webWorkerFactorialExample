# TestWebWorkers

This project is a sample demo to understand changes between running angular 2 in a single thread and doing so using webworkers


## Install

After downloading the code, run `npm install` to install dependencies.


## Run in single_thread

Move to GIT `single_thread` branch.

Run `npm start`. This will execute the webpack dev server in http://localhost:8080


## Run using webworkers

Move to GIT `webworkers` branch.

The package.json file has been updated to use `webpack --watch` and a [simplehttpserver](https://www.npmjs.com/package/simplehttpserver) dev server, because webpack-dev-server causes an error when using Web Workers. 

So first you need to install *simplehttpserver* in case you don't already have it:

```bash
npm install -g simplehttpserver
```

Then run `npm start`. This will execute webpack in watch mode, and *simplehttpserver* in paralel using http://localhost:8080
