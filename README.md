# TestWebWorkers

This project is a sample demo to understand changes between running angular 2 in a single thread and doing so using webworkers


## Install

After downloading the code, run `npm install` to install dependencies.


## Run in single_thread

Move to GIT `single_thread` branch.

Run `npm start`. This will execute the webpack dev server in http://localhost:8080


## Run using webworkers

Move to GIT `webworkers` branch.

Run `webpack --watch` in a terminal. This will execute webpack to create all required resources inside *dist* folder and watch for any changes.

Inside other terminal, run a dev server like [simplehttpserver](https://www.npmjs.com/package/simplehttpserver), using port 8080 and base folder *dist*.
G.E. `simplehttpserver dist/ -p 8080`. This will run the demo in http://localhost:8080
