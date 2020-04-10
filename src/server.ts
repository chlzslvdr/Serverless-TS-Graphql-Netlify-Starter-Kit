
import { ApolloServer, gql } from 'apollo-server';
import { ApolloServer as ApolloServerLambda, MockList } from 'apollo-server-lambda';
import faker from 'faker';

const typeDefs = gql`
  type Company {
    id: ID!
    companyName: String!
    country: String!
    catchPhrase: String!
  }

  type Employee {
    id: ID!
    userName: String!
    email: String!
    description: String
    city: String
  }

  type Query {
    allCompanies: [Company!]!
    allEmployees: [Employee!]!
  }
`;

const mocks = {
  Query: () => ({
    allCompanies: () => new MockList(25),
    allEmployees: () => new MockList(25),
  }),
  Company: () => ({
    id: () => faker.random.uuid(),
    companyName: () => faker.company.companyName(),
    country: () => faker.address.country(),
    catchPhrase: () => faker.company.catchPhrase(),
  }),
  Employee: () => ({
    id: () => faker.random.uuid(),
    userName: () => faker.name.findName(),
    description: () => faker.lorem.sentence(),
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