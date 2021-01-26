import Head from 'next/head'
// import des composants 
import References from '../components/References/references'
import Intro from '../components/Intro/intro'
import Bio from '../components/Bio/bio'
import Services from '../components/Services/services'

//import motion 
import { motion } from "framer-motion";


// import des queries
import REFERENCES_QUERY from "../queries/references/references-query";

// import des librairie
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";


export default function Home({refstatic}) {
  return (
    <div>
      <Head>
        <title>Fabrice MIQUET-SAGE - developper ReactJS - NextJs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Bio />
      <Services />
      <References refstatic={refstatic} />    

     </div>
  )
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

  const { data, error, loading } = await client.query({
    query: REFERENCES_QUERY
  });
  if (loading) return <div className="circularProgress"><CircularProgress size={200}/></div>
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  const  refstatic  = data.references;

  return { props: { refstatic }    }

  };

