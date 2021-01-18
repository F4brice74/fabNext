import React from "react";
import Card from "../components/Article/card";
import ARTICLES_QUERY from "../queries/articles/articles-query";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// import material ui
import Grid from '@material-ui/core/Grid';

// import local 
import styles from "./actualites.module.scss"

const Articles = ({ articles }) => {
    console.log("articles from actualites", articles)
    return (

        <div
            className={styles.articles_bg}
        >
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
            >
                <Grid item xs={10} md={10}>
                    <h1>Mon actualité</h1>
                    <p className={styles.articles_paragraphe}>Billets d'humeur, nouveau projet, découverte, partage d'expériences ...</p>
                </Grid >
                <Grid
                item md={10}
                //alignItems="center" >
                >
                    {articles.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((article, i) => {
                        return (
                            <Card
                                article={article}
                                key={`article__${article.id}`}
                            />
                        )
                    })}

                </Grid>
            </Grid>
        </div>
    );

};
export default Articles;

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
        query: ARTICLES_QUERY
    });
    if (loading) return <div className="circularProgress"><CircularProgress size={200} /></div>
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    const articles = data.articles;
    console.log("articles", articles)
    return { props: { articles } }

};

