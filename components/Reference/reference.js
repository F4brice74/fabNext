import React, { useEffect } from "react";
import ReactHtmlParser from 'react-html-parser';
import Head from 'next/head';

// import material ui
import Grid from '@material-ui/core/Grid';

// import local
import styles from "./reference.module.scss"


const Reference = ({ theref }) => {
  
    return (
        <div >        
        <Head>
        <title>PROJET : {theref.title}</title>
        <meta property="og:title" content={theref.title} key="title" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
        <Grid
            container
            direction="row"
            justify="center"
            //alignItems="center"
            className={styles.reference_bg}
        >

            <Grid item xs={12} md={12} className={styles.reference_title}>
                <h1>{theref.title}</h1>
            </Grid>
            <Grid item xs={11} md={10}
                container
                justify="space-around"
                alignItems="flex-start"
            >

                <Grid item xs={12} md={6} className={styles.reference_content}>
                    <div>{ReactHtmlParser(theref.content)}</div>
                </Grid>

                <Grid item xs={12} md={6}
                    container
                    justify="space-around"
                    alignItems="flex-start"
                    direction="column"
                    spacing={5}
                    className={styles.reference_sectionImg}
                >
                    <Grid item xs={12} md={12}>
                        <img className={styles.reference_img_intro} src={theref.images[0].url} alt="reference" />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <img className={styles.reference_img_intro} src={theref.images[1].url} alt="reference" />
                    </Grid>
                </Grid>


            </Grid>


        </Grid>
        </div>
    );
}

export default Reference;