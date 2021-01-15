import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      id
      title
      content
      slug
      excerpt
      category {
        id
        name
      }
      image {
        url
      }
      createdAt
    }
  }
`;

export default ARTICLES_QUERY;