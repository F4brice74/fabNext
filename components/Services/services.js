import React from "react";
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import strapiIcon from '@iconify/icons-logos/strapi';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import graphqlIcon from '@iconify/icons-logos/graphql';
import herokuIcon from '@iconify/icons-logos/heroku-icon';
import mongodbIcon from '@iconify/icons-logos/mongodb';
import html5Icon from '@iconify/icons-typcn/html5';
import javascriptIcon from '@iconify/icons-logos/javascript';
import sassIcon from '@iconify/icons-logos/sass';
import css3 from '@iconify/icons-logos/css-3';
import materialUi from '@iconify/icons-logos/material-ui';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import nextjsIcon from '@iconify/icons-logos/nextjs';
import auth0Icon from '@iconify/icons-logos/auth0';



// import animation
import ScrollAnimation from 'react-animate-on-scroll';


// import material ui
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

//import local
import styles from "./services.module.scss";


const useStyles = makeStyles({
    card: {
        minWidth: '140px',
        maxWidth: '200px',
        minHeight: '300px',
        maxHeight: '350px',
        boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
        background: 'rgb(239,122,27,1)',
        borderRadius: '20px',
    }
});



const Services = () => {

    const classes = useStyles();

    return (
        <Grid
            container
            id="services"
            justify="center"
            className={styles.services_bg}
        >
            <Grid item xs={11} md={7} className={styles.services_intro_title}>
                <ScrollAnimation
                    delay={100}
                    duration={0.5}
                    animateIn="fadeInRight"
                >
                    <h4>création de sites <br />portfolios, corporate, événementiel, e-commerce</h4>
                </ScrollAnimation>
            </Grid>

            <Grid item container md={7}>
                <Grid item xs={1} md={1}>
                    <div className={styles.separator}> </div>
                </Grid>
                <Grid item xs={10} md={10} className={styles.services_intro_parag}>
                <ScrollAnimation
                    delay={100}
                    duration={0.5}
                    animateIn="fadeIn"
                >
                    <Box>
                        <p> <span className={styles.mark}>Chaque projet est unique.</span> Il ne s'agit pas uniquement de technologies, de frameworks, de codes, de fonctionnalités ... mais bien d'une histoire à mettre en lumière, à raconter, à présenter. <span className={styles.mark}>Une histoire que vous portez et que vous partagez.</span></p>
                    </Box>
                    <Box>
                    <p>
                        <li>Mise en valeur de votre activité, de vos services, de votre savoir-faire ...</li>
                        <li>Communication autour de votre univers de marque, de votre événement ...</li>
                        <li>Commercialisation de vos produits, de vos prestations ...</li>
                        </p>
                    </Box>
                    <Box>
                        <p>Dès lors il est très important pour moi d'ancrer ce développement dans <span className={styles.mark}>une vraie relation de confiance,</span> pour mieux identifier vos besoins, vos objectifs et apporter les solutions les plus adpatées.<br /><br />
                A partir de vos maquettes, de vos design, ou plus simplement de vos idées, <span className={styles.mark}>je conçois l'ensemble de votre projet :</span> <li> le backend (l'architecture du site, le modèle de données, le backoffice)</li> <li>le frontend (l'interface utilisateur).</li><br />Grâce à un réseau de partenaires, je peux assurer le suivi des prestataires ou de ressources externes nécessaires à la réalisation du projet : graphisme, traduction, rédaction de contenus, web design, marketing, stratégie ... </p>
                    </Box>
                    </ScrollAnimation>

                </Grid>
            </Grid>
            <Grid
                item container
                xs={12}
                md={12}
                //direction="row"
                alignItems="center"
                justify="center"
                className={styles.services_item}
                spacing={2}
            >
                <Grid item xs={10} md={2} lg={2}>
                <ScrollAnimation 
                   delay={100}                   
                    duration={0.5}
                    animateIn="flipInY"
                >
                    <Card classes={{ root: classes.card }} className={styles.services_box_services}>
                        <div className={styles.services_box_icon}><img src="/assets/img/service-projet.png" alt="projet" /></div>
                        <p className={styles.services_box_title}>GESTION DE PROJETS<br /></p>
                        <p>Etude des besoins</p>
                        <p>Cahier des charges</p>
                        <p>Maquettes</p>
                        <p>Suivi de projet</p>
                        <p></p>
                    </Card>
                    </ScrollAnimation>
                </Grid>

                <Grid item xs={10} md={2} lg={2}>
                <ScrollAnimation 
                   delay={200}                   
                    duration={0.5}
                    animateIn="flipInY"
                >
                    <Card classes={{ root: classes.card }} className={styles.services_box_services} >
                        <div className={styles.services_box_icon}><img src="/assets/img/service-back.png" alt="back" /></div>
                        <p className={styles.services_box_title}>DEVELOPPEMENT BACKEND<br /></p>
                        <p>Bases de données</p>
                        <p>Architecture technique</p>
                        <p>Fonctionnalités</p>
                        <p>Back Office</p>
                    </Card>
                    </ScrollAnimation>
                </Grid>

                <Grid item xs={10} md={2} lg={2} >
                <ScrollAnimation 
                   delay={300}                   
                    duration={0.5}
                    animateIn="flipInY"
                >

                    <Card classes={{ root: classes.card }} className={styles.services_box_services} >
                        <div className={styles.services_box_icon}><img src="/assets/img/service-front.png" alt="front" /></div>
                        <p className={styles.services_box_title}>DEVELOPPEMENT FRONTEND<br /> </p>
                        <p>Interface utilisateur</p>
                        <p>Responsive design</p>
                        <p>Integration contenus</p>
                        <p>Animations</p>

                    </Card>
                    </ScrollAnimation>
                </Grid>

                <Grid item xs={10} md={2} lg={2}>
                <ScrollAnimation 
                   delay={400}                   
                    duration={0.5}
                    animateIn="flipInY"
                >
                    <Card classes={{ root: classes.card }} className={styles.services_box_services} >
                        <div className={styles.services_box_icon}><img src="/assets/img/service-content.png" alt="content" /></div>
                        <p className={styles.services_box_title}>CREATION DE CONTENUS<br /></p>
                        <p>Shooting photos</p>
                        <p>Shooting vidéos</p>
                        <p>Contenus réseaux sociaux</p>
                        <p>Snack content</p>
                    </Card>
</ScrollAnimation>
                </Grid>
                <Grid
                    container
                    item
                    xs={12} md={10} lg={8}
                    direction="column"
                    alignItems="center"
                    className={styles.services_box}
                >
                    <Grid
                        item
                        xs={10} md={10}>
 <ScrollAnimation
                    delay={100}
                    duration={0.5}
                    animateIn="fadeInRight"
                >
                        <h3>ma galaxie</h3>
                        </ScrollAnimation>
                        <p>Je construis mes applications autour de librairies Javascript. Formé et spécialisé sur ReactJS, je développe mes interfaces utilisateurs avec Next JS et je m'appuie sur des CMS Headless JS pour la partie backend.<br /><br /> Construites en mode API Rest ou GraphQL, ces solutions m'offrent <strong>ergonomie, rapidité, scalabilité</strong>.<br /><br />
                        Elles correspondent aux nouvelles attentes et aux nouveaux usages des utilisateurs et aux plus récents standards du web.
                            </p>

                    </Grid>

                    <Grid
                        item
                        container
                        xs={10} md={7}
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        className={styles.services_box_icon}
                    >
                        <Icon className={styles.services_icon} icon={reactIcon} width="4em" />
                        <Icon className={styles.services_icon} icon={nextjsIcon} width="8em" />
                        <Icon className={styles.services_icon} icon={strapiIcon} width="6em" />
                        <Icon className={styles.services_icon} icon={nodejsIcon} width="4em" />
                        <Icon className={styles.services_icon} icon={graphqlIcon} width="4em" />
                        <Icon className={styles.services_icon} icon={herokuIcon} width="4em" />
                        <Icon className={styles.services_icon} icon={mongodbIcon} width="6em" />
                        <Icon className={styles.services_icon} icon={html5Icon} width="4em" />
                        <Icon className={styles.services_icon} icon={javascriptIcon} width="4em" />
                        <Icon className={styles.services_icon} icon={sassIcon} width="4em" />
                        <Icon className={styles.services_icon} icon={css3} width="3em" />
                        <Icon className={styles.services_icon} icon={materialUi} width="4em" />
                        <Icon className={styles.services_icon} icon={bootstrapIcon} width="3em" />
                        <Icon className={styles.services_icon} icon={auth0Icon} width="3em" />

                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
}



export default Services;