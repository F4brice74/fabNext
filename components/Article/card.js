import React from "react";
import Link from 'next/link'
import Moment from 'react-moment';

// import material ui
import Grid from '@material-ui/core/Grid';

// import local 
import styles from "./card.module.scss"


const Card = ({ article }) => {
  const imageUrl = article.image.url;
  const goodSlug = article.slug;

  return (
    <Link href={`/actualites/${goodSlug}`} className={styles.link} >
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"       
        className={styles.card_bg}
      >
        <Grid item container xs={10} md={12} >
          <p className={styles.card_categorie}>
            {article.category.name}
          </p>
          <p className={styles.card_date}><Moment format="DD/MM/YYYY">{article.createdAt}</Moment></p>
          <img
            src={imageUrl}
            alt={article.image.url}
            className={styles.card_Img}
          />
        </Grid>
        <Grid item xs={10} md={12} >
          <h3 className={styles.card_title} >
            {article.title}
          </h3>
        </Grid>
        <Grid item xs={10} md={12} >
          <p>{article.excerpt}</p>
        </Grid>
      </Grid>
    </Link>
  );
};

export default Card;