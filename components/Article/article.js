import React, { useEffect } from "react";
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';
import Head from 'next/head'




// import material ui
import Grid from '@material-ui/core/Grid';

import styles from "../Reference/reference.module.scss"
import styles2 from "./card.module.scss"



const Article = ({ article }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }); 
    return (
        <div className={styles.reference_bg}>
        <Head>
        <title>{article.title}</title>
        <meta property="og:title" content={article.title} key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
            <Grid
                direction="column"
                container
                justify="center"
                alignItems="center"
            >
                <Grid item container
                    direction="column"
                    alignItems="center"
                    xs={12} md={12}
                    className={styles.reference_title}
                >
                    <Grid item xs={11} md={4}>
                        <img className={styles.reference_img_intro} src={article.image.url} alt="reference" />
                    </Grid>
                    <Grid><h1>{article.title}</h1></Grid>
                </Grid>

                <Grid item xs={11} md={7} className={styles.reference_content}>
                <p className={styles2.card_date}><Moment format="DD/MM/YYYY">{article.createdAt}</Moment></p>
                <p className={styles2.card_categorie}>
            {article.category.name}
          </p>

                    <div>{ReactHtmlParser(article.content)}</div>
                </Grid>
            </Grid>
        </div>

    );
};

export default Article;