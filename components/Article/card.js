import React from "react";
import Link from 'next/link'

// import material ui
import Grid from '@material-ui/core/Grid';

// import local 
import styles from "./card.module.scss"
//import ErrorPage from '../../components/ErrorPage/errorpage';



const Card = ({ article }) => {
  const imageUrl = article.image.url;
  const goodSlug = article.slug;


  
  return (
    <Link href={`/actualites/${goodSlug}`} >
      <Grid 
        container
        direction="column"
        alignItems="center"
        justify="center"
        xs={10} md={3}
        className={styles.card_bg}
      >
        <Grid item xs={10} md={12} justify="center">
          <p className={styles.card_categorie}>
            {article.category.name}
          </p>
          {/* <p className={styles.card_date}><Moment format="DD/MM/YYYY">{article.createdAt}</Moment></p> */}
          <img
            src={imageUrl}
            alt={article.image.url}
            className={styles.card_Img}
          />
        </Grid>
        <Grid item xs={10} md={12} justify="center">
          <h3 className={styles.card_title} >
            {article.title}
          </h3>
          </Grid>
          <Grid item xs={10} md={12} justify="center">
          <p>{article.excerpt}</p>
        </Grid>
      </Grid>
    </Link>
  );
};

export default Card;