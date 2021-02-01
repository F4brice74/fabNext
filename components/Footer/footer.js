import React from "react";
import Icon from '@iconify/react';
import linkedinIcon from '@iconify/icons-brandico/linkedin';
import githubText from '@iconify/icons-brandico/github-text';
import mapMarkerAlt from '@iconify/icons-fa-solid/map-marker-alt';

//import material ui
import Grid from '@material-ui/core/Grid';

// import local 
import styles from './footer.module.scss'

// import animation
import ScrollAnimation from 'react-animate-on-scroll';

const Footer = () =>  {

    return (
        <Grid
            container
            id="contact"
            direction="row"
            justify="center"
            alignItems="center"            
            //spacing={4}
            className={styles.contact_bg}
        >

            <Grid item container xs={8} md={8} alignItems="baseline">
                <Grid item xs={12} md={3}>
                    <h1>CONTACT</h1>
                </Grid>
            </Grid>

            <Grid item container xs={8} alignItems="flex-start">
                <Grid item xs={10} md={4} className={styles.contact_border}>
                <ScrollAnimation
                    delay={0}
                    duration={0.5}
                    animateIn="bounceIn"
                >
                   
                        <li>
                        <p className={styles.contact_paragraphe}>Fabrice MIQUET-SAGE</p>
                        </li>
                        <li><p className={styles.contact_paragraphe}>+33 (0)6 85 10 13 03</p></li> 
                        <li><p className={styles.contact_paragraphe}><a href="mailto:fabrice.miquetsage.pro@gmail.com">fabrice.miquetsage.pro[at]gmail.com</a></p></li> 
                    
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={10} md={2} className={styles.contact_border}>
                <ScrollAnimation
                    delay={100}
                    duration={0.5}
                    animateIn="bounceIn"
                >
                    <p className={styles.contact_paragraphe}>
                        <li> <a href="https://www.linkedin.com/in/fabricemiquetsage/" target="blank"><Icon icon={linkedinIcon} width="3em" /></a></li>
                    </p>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={10} md={2} className={styles.contact_border}>
                <ScrollAnimation
                    delay={200}
                    duration={0.5}
                    animateIn="bounceIn"
                >
                    <p className={styles.contact_paragraphe}>
                        <li><a href="https://github.com/F4brice74" target="blank"><Icon icon={githubText} color="white" width="3em" /></a>
                        </li>
                    </p>
                    </ScrollAnimation>
                </Grid>

                <Grid item container xs={10} md={4} className={styles.contact_border}>
                <Grid item xs={4} md={2}>
                <ScrollAnimation
                    delay={300}
                    duration={0.5}
                    animateIn="bounceIn"
                >
                    <p className={styles.contact_paragraphe}>
                        <li><Icon icon={mapMarkerAlt} width="3em" color="white"/></li>                       
                    </p>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={8} md={10} >
                <ScrollAnimation
                    delay={300}
                    duration={0.5}
                    animateIn="bounceIn"
                >
                    <p className={styles.contact_paragraphe}>
                        <li>Développeur Fullstack Freelance</li>
                        <li>ici ou la en présentiel, en remote ...</li>
                    </p>
                    </ScrollAnimation>
                </Grid>
            </Grid>
            
            </Grid>
        </Grid >

    );
}


export default Footer;