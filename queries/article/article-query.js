import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Articles($slug: String!) {
    articles (where: {slug: $slug}) {
      id
      title
      content
      slug
      image {
        url
      }
      category {
        id
        name
      }
      createdAt
    }
  }
`;

export default ARTICLE_QUERY;