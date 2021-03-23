import React from "react";

// import material ui
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import HttpIcon from '@material-ui/icons/Http';
import TheatersIcon from '@material-ui/icons/Theaters';
import EventIcon from '@material-ui/icons/Event';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

//import local
import styles from "./bio.module.scss"

// import animation
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles({
    root: {
        marginTop: '10px',
        //marginLeft: '3em',
        background: 'linear-gradient(45deg, #204f75 30%, #4f81aa 90%)',
        color: 'white',
        '&:hover': {
            background: 'linear-gradient(30deg, #204f75 40%, #4f81aa 90%)',
        },
    },
    timeline: {
        marginBottom: '1em'
    }
});


const Bio = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            id="bio"
            direction="row"
            justify="center"
            className={styles.bio_global}
        >
            <Grid
                item
                container
                xs={10} md={4}
                justify="space-between"
                alignItems="center"

            >
                <Grid item xs={12} md={12}>
                    <ScrollAnimation
                        duration={0.5}
                        animateIn="fadeIn"
                    >
                        <img src="/assets/img/img_fab.jpg" className={styles.bio_img2} alt="fabrice" />
                    </ScrollAnimation>
                    <ScrollAnimation
                        delay={100}
                        duration={0.5}
                        animateIn="fadeIn"
                    >
                        <p className={styles.bio_testimonial}> "Web, audiovisuel, événementiel, communication, digital, j'explore depuis une quinzaine d'années différents terrains de jeux, tous aussi passionnants les uns que les autres.<br /> Chaque expérience, chaque projet réalisé, chaque collaboration, chaque rencontre contribue à m'enrichir, à nourrir mon savoir-faire et mon expertise.<br /> Je m’épanouis dans la conduite de projets, la recherche et la mise en œuvre de solutions, le suivi et la relation clients.<br /> Ce parcours atypique me mène aujourd'hui à proposer mes services dans la conception de sites et d'applications webs. " <br></br>

                        </p>
                    </ScrollAnimation>

                </Grid>
                <Grid item container direction="row" xs={12} md={8} justify="center">
                    <Grid item xs={5}>
                        <Button
                            classes={{ root: classes.root, }}
                            variant="contained"
                            href="/actualites">
                            ACTUALITES
                        </Button>
                    </Grid>
                    <Grid item xs={5}>
                        <Button
                            classes={{ root: classes.root, }}
                            variant="contained"
                            href="/#references"
                        >REFERENCES
                        </Button>
                    </Grid>
                </Grid>




            </Grid>
            <Grid item container xs={12} md={5}
                direction="row"
                justify="center"
                alignItems="center"
                className={styles.timeline}>
                <h3 className={styles.bio_parcours}>mon parcours</h3> 
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className={styles.bio_date}>2004</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent classes={{ root: classes.timeline }}>
                            <p className={styles.bio_title}>Ecole 3IS</p>
                            <p className={styles.bio_paragraphe}>Diplôme de Technicien supérieur en Audiovisuel</p>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className={styles.bio_date}>2006</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <TheatersIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent classes={{ root: classes.timeline }}>
                            <p className={styles.bio_title}>Studio MT FILMS</p>
                            <p className={styles.bio_paragraphe}>Entrepreneur / Chef de projet <br />création et développement <br />d'un studio de production audiovisuelle</p>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className={styles.bio_date}>2015</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <EventIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent classes={{ root: classes.timeline }}>
                            <p className={styles.bio_title}>Agence L'ATELIER</p>
                            <p className={styles.bio_paragraphe}>Chef de projet <br />gestion de projets événementiels et scénographiques</p>

                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className={styles.bio_date}>2019</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <SchoolIcon />
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent classes={{ root: classes.timeline }}>
                            <p className={styles.bio_title}>O'CLOCK grande école du numérique</p>
                            <p className={styles.bio_paragraphe}>diplôme BAC+2 développeur Web et Web mobile</p>

                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className={styles.bio_date}>2020</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <AccountTreeIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent classes={{ root: classes.timeline }}>
                            <p className={styles.bio_title}>Agence SIGNATURE COMMUNICATION</p>
                            <p className={styles.bio_paragraphe}>Chargé de projets <br />Développement des projets vidéos, event & web</p>

                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent>
                            <p className={styles.bio_date}>Juillet 2020</p>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color="primary" variant="outlined">
                                <HttpIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p className={styles.bio_title}>FREELANCE</p>
                            <p className={styles.bio_paragraphe}>développement web et gestion de projets audiovisuels et événementiel</p>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>

            </Grid>
            <Grid item container xs={12}>
                <svg className={styles.bio_separator} viewBox="0 0 200 20" preserveAspectRatio="none">
                    <polygon points="0,0 0,20 200,0" />
                </svg>
            </Grid>
        </Grid>
    );
}


export default Bio;