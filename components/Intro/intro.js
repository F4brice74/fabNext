// import libraires
import React from "react";

// import material ui
import Grid from '@material-ui/core/Grid';

// import local
import styles from './intro.module.scss'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 10, y - window.innerHeight / 10]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 20 + 8 }px,${y / 20 + 8 }px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`


const Intro = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))


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
                <Grid className={styles.intro_over} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <animated.div  style={{ transform: props.xy.interpolate(trans1) }}>
                <p className={styles.intro_title}>Fabrice MIQUET-SAGE</p>
                </animated.div>
                <animated.div style={{ transform: props.xy.interpolate(trans2) }}>
                <p className={styles.intro_baseline}>Web & Content solutions</p>
                </animated.div>                  
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Intro;