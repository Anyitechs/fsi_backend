# FSI Nodejs API task

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/97d855c353c34362801e76387f292af6)](https://app.codacy.com/gh/Anyitechs/fsi_backend?utm_source=github.com&utm_medium=referral&utm_content=Anyitechs/fsi_backend&utm_campaign=Badge_Grade_Settings)

A simple API to power a mini web app

## Getting Started

Follow the guidelines below to set up a copy of this project locally on your machine for development and testing purposes.

### First steps

To have a local copy of this project, you can:

- Clone the repository by using git clone command, or the download zip alternative provided on github

```
git clone https://github.com/Anyitechs/fsi_backend.git
```

To run the cloned version locally, `cd` into the root folder and run

```
npm install
```

or

```
yarn
```

to install required dependencies.


### Testing

To test the application on your local machine, run

```
npm test
```

or

```
yarn test
```

## API Endpoints

### Starting the Server

Before you start testing the endpoints with postman, you need to start the server with:

```
npm start
```

or

```
yarn start
```

### Plans

- Request Method: GET
- URL: [http://localhost:3000/api/v1/plans](http://localhost:3000/api/v1/plans)

- Sample Response: `{ "status": "Success", "plans": { "plans": "[]" } }`

### ResetBVN

- Request Method: GET
- URL: [http://localhost:3000/api/v1/bvn/reset](http://localhost:3000/api/v1/bvn/reset)

### VerifyBVN

- Request Method: POST
- URL: [http://localhost:3000/api/v1/bvn/verify](http://localhost:3000/api/v1/bvn/verify)

## Author

**Ifeanyichukwu Emmanuel Amajuoyi** [github](https://github.com/Anyitechs) 