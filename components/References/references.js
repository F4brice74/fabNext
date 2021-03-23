import React from "react";
import Link from 'next/link';
import Head from 'next/head';

import REFERENCES_QUERY from "../../queries/references/references-query";
import { useQuery } from "@apollo/client";


// import material ui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


//import animations
import { useSpring, animated } from 'react-spring'


//import locaux
import styles from "./references.module.scss"

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const AnimCard = ({ cardtoanimate }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 2, tension: 300, friction: 10 } }))
    return (
        <animated.div
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}>
            {cardtoanimate}
        </animated.div>
    )

};

const useStyles = makeStyles({
    card: {
        width: '250px',
        height: '250px',
        padding: '1em',
        marginBottom: '2em',
        boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
        marginLeft: '1.5em',
        marginRight: '1.5em',
        background: 'linear-gradient(25deg, #0D4C80 30%, #0F6D92 70%)',
    }
});



const References = ({ refstatic }) => {
    const classes = useStyles();
    let sortrefstatic = refstatic.slice().sort(function(a,b){return b.rating - a.rating})
//console.log("sortrefstatic from component", sortrefstatic)
    return (
       
        <Grid
            container
            id="references"
            //direction="row"
            justify="center"
            className={styles.references_bg}
        >

            <Grid item xs={10} md={8}>
                <h1>références</h1>
            </Grid>
            <Grid
                container item xs={10} md={8}
                direction="row"

            //alignItems="center" >
            >
                {sortrefstatic.map(reference => (
                    <AnimCard 
                    key={reference.id}
                    cardtoanimate={
                        <Link href={`/references/${reference.slug}`} >

                            <Card
                                classes={{ root: classes.card }}
                                key={reference.id}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="image reference"
                                        height="140"
                                        className={styles.references_img}
                                        image={reference.images[0].url}
                                    />
                                    <CardContent>
                                        <p className={styles.references_card_title}>{reference.title}</p>
                                        <p className={styles.references_card_p}>{reference.excerpt}</p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>} />

                ))
                }
            </Grid>
            <Grid item container xs={12}>
                <svg className={styles.references_separator} viewBox="0 0 200 20" preserveAspectRatio="none">
                    <polygon points="0,0 0,20 200,0" />
                </svg>
            </Grid>

        </Grid >
       
    );
}


export default References;