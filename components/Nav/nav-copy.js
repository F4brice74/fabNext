import React, { useState } from 'react';
import {
  Grid,
  Drawer,
  Button,
  MenuItem,
  AppBar,
  Toolbar,
} from '@material-ui/core'

import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu';

// import local
import styles from './nav.module.scss';



const Nav = () => {

  const [drawerOpen, setdrawerOpen] = useState(false);

  const toggleDrawerButton = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setdrawerOpen(!drawerOpen)
  };

  return (
    <Grid item xs={12} container justify="flex-start">
      {/* <Toolbar
        className={styles.desktopAppbar}>
        <Link href="/#home"><a className={`${styles.btn} ${styles.from_center}`}>Hello</a></Link>
        <Link href="/#services"><a className={`${styles.btn} ${styles.from_center}`}>Services</a></Link>
        <Link href="/#references"><a className={`${styles.btn} ${styles.from_center}`}>References</a></Link>
        <Link href="/actualites"><a className={`${styles.btn} ${styles.from_center}`}>Actualites</a></Link>
        <Link href="/#contact"><a className={`${styles.btn} ${styles.from_center}`}>contact</a></Link>
      </Toolbar> */}



      <AppBar
        className={styles.mobileAppbar}
        position="fixed"
        color="inherit"
      >
        <div >
          <Button onClick={toggleDrawerButton} >
            <MenuIcon />
        </Button>
          <Drawer className={styles.mobileAppbar} open={drawerOpen} onClose={toggleDrawerButton}>
            <MenuItem onClick={toggleDrawerButton}><Link className={styles.list} href="/">Accueil</Link></MenuItem>
            <MenuItem onClick={toggleDrawerButton}><Link className={styles.list} href="/#services">Services</Link></MenuItem>
            <MenuItem onClick={toggleDrawerButton}><Link className={styles.list} href="/#references">References</Link></MenuItem>
            <MenuItem onClick={toggleDrawerButton}><Link className={styles.list} href="/actualites">Actualites</Link></MenuItem>
            <MenuItem onClick={toggleDrawerButton}><Link className={styles.list} href="/#contact">Contact</Link></MenuItem>
          </Drawer>
        </div>
      </AppBar>

    </Grid>



  );
};

export default Nav;