import { gql } from 'graphql-request';

export const GET_PAGES = gql`
  {
    pages {
      id
      heading
      body {
        html
      }
    }
  }
`
