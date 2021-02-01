import ARTICLE_QUERY from "../../queries/article/article-query";
import ARTICLES_QUERY from "../../queries/articles/articles-query";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import Article from '../../components/Article/article'


const Actualite = ({ article }) => {

    return (

        <Article article={article}/>
    );
};

export default Actualite;

export async function getStaticPaths() {
    const client = new ApolloClient({
        uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql` || "http://localhost:1337/graphql",
        credentials: "include",
        fetchOptions: {
            mode: 'no-cors',
        },
        cache: new InMemoryCache(),
    });

    const { data, error, loading } = await client.query({
        query: ARTICLES_QUERY,
    });
    if (loading) return <div className="circularProgress"><CircularProgress size={200} /></div>
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    const articlestatic = data.articles;
  //console.log("articlestatic from slug", articlestatic)
  
  const paths = articlestatic.map((articleOne) => ({
    params: { slug: articleOne.slug },
  }))
  
 //console.log("paths", paths)
    
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

        cache: new InMemoryCache(),
    });
    const { slug } = params;

    const { data, error, loading } = await client.query({
        query: ARTICLE_QUERY,
        variables: { slug: slug }
    });
    if (loading) return <div className="circularProgress"><CircularProgress size={200} /></div>
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    const article = data.articles[0];
    //console.log("article from slug", article)
  
    return {
        props: { article } 
    }

};