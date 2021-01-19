import React, { useEffect } from "react";
import ReactHtmlParser from 'react-html-parser';




// import material ui
import Grid from '@material-ui/core/Grid';

import styles from "../Reference/reference.module.scss"



const Article = ({ article }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }); 
    return (
        <div className={styles.reference_bg}>
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
                <p className={styles.card_date}>{article.createdAt}</p>
                <p className={styles.card_categorie}>
            {article.category.name}
          </p>

                    <div>{ReactHtmlParser(article.content)}</div>
                </Grid>
            </Grid>
        </div>

    );
};

export default Article;