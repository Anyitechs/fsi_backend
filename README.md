# FSI Nodejs API task

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

- Request Method: POST
- URL: [http://localhost:3000/api/v1/bvn/rest](http://localhost:3000/api/v1/bvn/rest)

## Author

**Ifeanyichukwu Emmanuel Amajuoyi** [github](https://github.com/Anyitechs) 