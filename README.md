[![Netlify Status](https://api.netlify.com/api/v1/badges/bb4daf08-e525-421f-b55c-0294053edf2b/deploy-status)](https://app.netlify.com/sites/mock-apollo-server/deploys)

# Serverless-TS-Graphql-Netlify-Starter-Kit
A Serverless TypeScript GraphQL API deployed on Netlify

[LIVE DEMO](https://mock-apollo-server.netlify.app)

## Installation

Clone and run npm install to install the dependencies.

```bash
npm install
```

### Start locally

To run the project locally, use the `start` command.

```bash
npm run start
```

### Sample Query
```
query {
  companyLists {
    id
    companyName
    country
    catchPhrase
  }
  employeeLists {
    id
    name
    age
    jobTitle
    jobArea
    state
  }
  residentsList {
    id
    name
    age
    gender
    email
    city
  }
}

```

### Practice

[![Edit elastic-shirley-0whsd](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/serverless-typescript-graphql-netlify-starter-42fvf)

## About

This project uses both `apollo-server` and `apollo-server-lambda` so that you can write your GraphQL resolvers and type definitions in one place, yet run GraphQL servers locally and serverlessly.
