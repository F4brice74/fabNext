
import REFERENCE_QUERY from "../../queries/reference/reference-query";
import REFERENCES_QUERY from "../../queries/references/references-query";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Reference from "../../components/Reference/reference"

const Referenceslug = ({ theref }) => {

    return (
        <Reference theref={theref}></Reference>
    );
}

export async function getStaticPaths() {
    const client = new ApolloClient({
        uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql` || "http://localhost:1337/graphql",
        credentials: "include",
        fetchOptions: {
            mode: 'no-cors',
        },
        // headers: {
        //   authorization: token ? `Bearer ${token}` : "",
        // },
        cache: new InMemoryCache(),
    });

    const { data, error, loading } = await client.query({
        query: REFERENCES_QUERY,
    });
    if (loading) return <div className="circularProgress"><CircularProgress size={200} /></div>
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    const refstatic = data.references;
  console.log("refstatic from slug", refstatic)
  
  const paths = refstatic.map((refone) => ({
    params: { slug: refone.slug },
  }))
  
 console.log("paths", paths)
    
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {

    const client = new ApolloClient({
        uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql` || "http://localhost:1337/graphql",
        credentials: "include",
        fetchOptions: {
            mode: 'no-cors',
        },
        // headers: {
        //   authorization: token ? `Bearer ${token}` : "",
        // },
        cache: new InMemoryCache(),
    });
    const { slug } = params;
    const { data, error, loading } = await client.query({
        query: REFERENCE_QUERY,
        variables: { slug: slug }
    });
    if (loading) return <div className="circularProgress"><CircularProgress size={200} /></div>
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    const theref = data.references[0];
    console.log("theref from slug", theref)
  
    return {
        props: { theref } 
    }

};


    export default Referenceslug;