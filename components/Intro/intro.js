// import libraires
import React, { useState, useEffect } from "react";

// import material ui
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

// import local
import styles from './intro.module.scss'

// import animation 
import { motion, AnimatePresence } from "framer-motion"

export const Typer = ({title ='', dataText}) => {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [speed, setSpeed] = useState(150)
    const [loop, setLoop] = useState(0)
  
    const i = loop % dataText.length
    const fullText = dataText[i]
  
    const handleTyping = () => {
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      )
  
      setSpeed(isDeleting ? 10 : 100)
  
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 800)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoop(loop + 1)
      } 
    }
  
    useEffect(() => {
      const timer = setTimeout(() => {
        handleTyping()
      }, speed)
      return () => clearTimeout(timer)
    })
  
    return <p className={styles.intro_baseline}>{text}</p>
  }
  
const Intro = () => {
    const msg = ["développeur web ...", "créateur de contenus ...", "chef de projet !", ]

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
                            <p className={styles.intro_baseline}>Je suis Freelance, <Typer dataText={msg} /></p>
                        </motion.div>
                    </Grid>
                </AnimatePresence>
               
            </Grid>
        </Grid >
    );
}

export default Intro;