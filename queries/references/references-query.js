import { gql } from "@apollo/client";

const REFERENCES_QUERY = gql`
    query References {
            references {
             id
             title
             content	
             excerpt
             isPublished
             images {url}
             slug
             rating
             }
           }
`;

export default REFERENCES_QUERY;