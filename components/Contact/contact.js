import React from "react";
import Icon from '@iconify/react';
import linkedinIcon from '@iconify/icons-brandico/linkedin';
import githubText from '@iconify/icons-brandico/github-text';
import mapMarkerAlt from '@iconify/icons-fa-solid/map-marker-alt';

//import material ui
import Grid from '@material-ui/core/Grid';

//import local
import './contact.scss'

const Contact = () => {

    return (
        <Grid
            container
            id="contact"
            direction="row"
            justify="center"
            alignItems="center"            
            //spacing={4}
            className="contact_bg"
        >

            <Grid item container xs={8} md={8} alignItems="baseline">
                <Grid item xs={12} md={3}>
                    <h1>CONTACT</h1>
                </Grid>
                {/* <Grid item xs={12} md={9}>
                    <p className="contact_paragraphe">
                        Vous avez un projet, une idée, et si on prenait contact ;-) </p>
                </Grid> */}
            </Grid>

            <Grid item container xs={8} alignItems="flex-start">
                <Grid item xs={10} md={4} className="contact_border">
                    <p className="contact_paragraphe">
                        <li>Fabrice MIQUET-SAGE</li>
                        <li>+33 (0)6 85 10 13 03</li> 
                        <li>fabrice.miquetsage.pro[at]gmail.com</li> 
                    </p>
                </Grid>
                <Grid item xs={10} md={2} className="contact_border">
                    <p className="contact_paragraphe">
                        <li> <a href="https://www.linkedin.com/in/fabricemiquetsage/" target="blank"><Icon icon={linkedinIcon} width="3em" /></a></li>
                    </p>
                </Grid>
                <Grid item xs={10} md={2} className="contact_border">
                    <p className="contact_paragraphe">
                        <li><a href="https://github.com/F4brice74" target="blank"><Icon icon={githubText} color="white" width="3em" /></a>
                        </li>
                    </p>
                </Grid>

                <Grid item container xs={10} md={4} className="contact_border">
                <Grid item xs={4} md={2}>
                    <p className="contact_paragraphe">
                        <li><Icon icon={mapMarkerAlt} width="3em" color="white"/></li>                       
                    </p>
                </Grid>
                <Grid item xs={8} md={10} >
                    <p className="contact_paragraphe">
                        <li>Développeur Fullstack Freelance</li>
                        <li>ici ou la en présentiel, en remote ...</li>
                    </p>
                </Grid>
            </Grid>
            
            </Grid>
        </Grid >

    );
}


export default Contact;