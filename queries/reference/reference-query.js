import gql from "graphql-tag";

const REFERENCE_QUERY = gql`
    query References($slug: String!) {
            references (where: {slug: $slug}) {
             id
             slug
             title
             content	
             excerpt
             isPublished
             images {url}
             }
           }
`;

export default REFERENCE_QUERY;