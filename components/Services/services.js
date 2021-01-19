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
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import nextjsIcon from '@iconify/icons-logos/nextjs';
import auth0Icon from '@iconify/icons-logos/auth0';


// import animation


// import material ui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
//import local
import styles from "./services.module.scss";


const useStyles = makeStyles({
    card: {
        minWidth: '140px',
        maxWidth: '300px',
        minHeight: '180px',
        maxHeight: '180px',
        marginBottom: '5em',
        boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
        marginLeft: '1.5em',
        marginRight: '1.5em',
        backgroundColor: '#EF7A1B',
    }
});

const Services = () => {

    const classes = useStyles();
    return (
        <Grid
            container
            id="services"
            justify="space-around"
            className={styles.services_bg}
        >
            <Grid item xs={11} md={6} className={styles.services_intro}>

                <h1>CRÉATION DE SITES WEB</h1>
                <h4>Site vitrine, portfolio, corporate, événementiel, e-commerce</h4>
                <p><ArrowRightIcon />Vous souhaitez mettre en valeur votre activité, vos services ? <br />
                    <ArrowRightIcon />Vous souhaitez communiquer sur votre marque, sur votre événement ? <br />
                    <ArrowRightIcon />Vous souhaitez vendre vos produits, vos prestations ?<br /> <br /> <span>Chaque projet de développement est unique</span>. Il ne s'agit pas uniquement de technologies, de frameworks, de codes, de fonctionnalités ... mais bien d'une histoire à mettre en lumière, à raconter, à présenter. <br /><span>Une histoire que vous portez et que vous partagez.</span> <br />Dès lors il est très important pour moi d'ancrer ce développement dans <span>une vraie relation de confiance,</span> pour mieux identifier vos besoins, vos objectifs et apporter les solutions les plus adpatées.<br /><br />
                A partir de vos maquettes, de vos design, ou plus simplement de vos idées, je conçois l'ensemble de votre site internet : le backend (l'architecture du site, le moteur) et le frontend (l'interface utilisateur).<br /><br />Grâce à un réseau de partenaires, je peux assurer le suivi des prestataires ou de ressources externes nécessaires à la réalisation du projet : graphisme, traduction, rédaction de contenus, web design, marketing, stratégie ... </p>

            </Grid>
            <Grid
                item container
                xs={12} md={12}
                //direction="row"
                alignItems="center"
                justify="center"
                className={styles.services_item}
            >
                <Grid item xs={10} md={6} lg={2}>

                    <Card classes={{ root: classes.card }} className={styles.services_box_services}>
                        <p className={styles.services_box_title}>GESTION DE PROJETS WEB<br /></p>
                        <p>Etude des besoins</p>
                        <p>Cahier des charges</p>
                        <p>Maquettes</p>
                        <p>Suivi de projet</p>
                        <p></p>
                    </Card>

                </Grid>

                <Grid item xs={10} md={6} lg={2}>

                    <Card classes={{ root: classes.card }} className={styles.services_box_services} >
                        <p className={styles.services_box_title}>DEVELOPPEMENT WEB BACK<br /></p>
                        <p>Bases de données</p>
                        <p>Architecture technique</p>
                        <p>Fonctionnalités</p>
                        <p>Console d'administration</p>
                    </Card>

                </Grid>

                <Grid item xs={10} md={6} lg={2} >

                    <Card classes={{ root: classes.card }} className={styles.services_box_services} >
                        <p className={styles.services_box_title}>DEVELOPPEMENT WEB FRONT<br /> </p>
                        <p>Interface utilisateur</p>
                        <p>Responsive design</p>
                        <p>Integration contenus</p>
                        <p>Animations</p>

                    </Card>

                </Grid>

                <Grid item xs={10} md={6} lg={2}>
                    <Card classes={{ root: classes.card }} className={styles.services_box_services} >
                        <p className={styles.services_box_title}>CREATION DE CONTENUS<br /></p>
                        <p>Shooting photos</p>
                        <p>Shooting vidéos</p>
                        <p>Contenus réseaux sociaux</p>
                        <p>Snack content</p>
                    </Card>
                </Grid>
                <Grid
                    container
                    item
                    xs={12} md={10} lg={6}
                    direction="column"
                    alignItems="center"
                    className={styles.services_box}
                >
                    <Grid
                        item
                        xs={10} md={10}>

                        <h3>ma galaxie</h3>
                        <p>Je construis mes applications autour de librairies Javascript. Formé et spécialisé sur ReactJS Je développe mes interfaces utilisateurs avec Next JS et je m'appuie sur des CMS Headless JS pour la partie backend.<br /><br /> Construites en mode API Rest ou GraphQL, ces solutions m'offrent <strong>ergonomie, rapidité, scalabilité</strong>.<br /><br />
                        Elles correspondent aux nouvelles attentes des utilisateurs et aux standards du web.
                            </p>

                    </Grid>

                    <Grid
                        item
                        container
                        xs={10} md={10}
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        className={styles.services_box_icon}
                    >
                        <Icon className={styles.services_icon} icon={reactIcon} width="3em" />
                        <Icon className={styles.services_icon} icon={nextjsIcon} width="4em" />
                        <Icon className={styles.services_icon} icon={strapiIcon} width="4em" />
                        <Icon className={styles.services_icon} icon={nodejsIcon} width="3em" />
                        <Icon className={styles.services_icon} icon={graphqlIcon} width="3em" />
                        <Icon className={styles.services_icon} icon={herokuIcon} width="3em" />
                        <Icon className={styles.services_icon} icon={mongodbIcon} width="3em" />
                        <Icon className={styles.services_icon} icon={html5Icon} width="3em" />
                        <Icon className={styles.services_icon} icon={javascriptIcon} width="3em" />
                        <Icon className={styles.services_icon} icon={sassIcon} width="3em" />
                        <Icon className={styles.services_icon} icon={css3} width="2em" />
                        <Icon className={styles.services_icon} icon={materialUi} width="3em" />
                        <Icon className={styles.services_icon} icon={bootstrapIcon} width="2em" />
                        <Icon className={styles.services_icon} icon={auth0Icon} width="2em" />

                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );
}



export default Services;