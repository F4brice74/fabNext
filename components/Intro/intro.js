// import libraires
import React from "react";

// import material ui
import Grid from '@material-ui/core/Grid';

// import local
import styles from './intro.module.scss'

// import animation 
import { motion, AnimatePresence } from "framer-motion"

const Intro = () => {

    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            className={styles.intro}
        >
            <Grid item container direction="column" xs={12} md={4} justify="center" alignItems="center">
                <video autoPlay muted loop className={styles.intro_video}>
                    <source src="https://res.cloudinary.com/fabricework/video/upload/v1599812666/montage_seq_web2_c109a17676.mp4" type="video/mp4" />
                </video>
                <AnimatePresence>

                    <Grid className={styles.intro_over}>
                        <motion.div initial={{ opacity: 0, y: '-100px' }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', bounce: 0.7, duration: 1 }}>
                            <p className={styles.intro_title}>Fabrice MIQUET-SAGE</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: '100px' }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', bounce: 0.7, duration: 1 }}>
                            <p className={styles.intro_baseline}>Web & Content <br /> solutions</p>
                        </motion.div>
                    </Grid>


                </AnimatePresence>


            </Grid>
        </Grid >
    );
}

export default Intro;