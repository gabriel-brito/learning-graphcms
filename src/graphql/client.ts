import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.GRAPHQL_HOST || '';

const client = new GraphQLClient(endpoint, {
  headers: {
    authorizations: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})
