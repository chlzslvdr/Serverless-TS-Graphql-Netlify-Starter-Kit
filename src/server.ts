
import { ApolloServer, gql } from 'apollo-server';
import { ApolloServer as ApolloServerLambda, MockList } from 'apollo-server-lambda';
import faker from 'faker';

const typeDefs = gql`
  type Company {
    id: ID!
    companyName: String!
    country: String!
    catchPhrase: String
  }

  type Employee {
    id: ID!
    name: String!
    age: String
    jobTitle: String!
    jobArea: String
    state: String
  }

  type Resident {
    id: ID!
    name: String!
    age: String!
    gender: String!
    email: String!
    city: String
  }

  type Query {
    companyLists: [Company!]!
    employeeLists: [Employee!]!
    residentsList: [Resident!]!
  }
`;

const genderLists = ['Female', 'Male'];

const mocks = {
  Query: () => ({
    companyLists: () => new MockList(15),
    employeeLists: () => new MockList(15),
    residentsList: () => new MockList(20),
  }),
  Company: () => ({
    id: () => faker.random.uuid(),
    companyName: () => faker.company.companyName(),
    country: () => faker.address.country(),
    catchPhrase: () => faker.company.catchPhrase(),
  }),
  Employee: () => ({
    id: () => faker.random.uuid(),
    name: () => faker.name.findName(),
    age: () => faker.random.number({min: 19, max: 60}),
    jobTitle: () => faker.name.jobTitle(),
    jobArea: () => faker.name.jobArea(),
    state: () => faker.address.state(),
  }),
  Resident: () => ({
    id: () => faker.random.uuid(),
    name: () => faker.name.findName(),
    age: () => faker.random.number({min: 12, max: 65}),
    gender: () => faker.random.arrayElement(genderLists),
    email: () => faker.internet.email(),
    city: () => faker.address.city(),
  }),
};

function createLambdaServer () {
  return new ApolloServerLambda({
    typeDefs,
    mocks,
    introspection: true,
    playground: true,
  });
}

function createLocalServer () {
  return new ApolloServer({
    typeDefs,
    mocks,
    introspection: true,
    playground: true,
  });
}

export { createLambdaServer, createLocalServer }