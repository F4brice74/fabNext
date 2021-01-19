// import libraires
import React from "react";

// import material ui
import Grid from '@material-ui/core/Grid';

// import local
import styles from './intro.module.scss'


const Intro = () => {

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            className={styles.intro}
        >
            <Grid item container direction="column" xs={12} md={4} justify="center" alignItems="center">
                <video autoPlay preload muted loop className={styles.intro_video}>
                    <source src="https://res.cloudinary.com/fabricework/video/upload/v1599812666/montage_seq_web2_c109a17676.mp4" type="video/mp4" />
                </video>
                <Grid className={styles.intro_over}>
                    <p className={styles.intro_title}>Fabrice MIQUET-SAGE</p>
                    <p className={styles.intro_baseline}>content & web solutions</p>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Intro;