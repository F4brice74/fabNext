import React, { useState } from 'react';

// import Material UI


import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles({
  paper: { 
    background: '#204F75',
    width : '250px',
  },
  
});


const Nav = () => {
  const classes = useStyles();

  const [drawerOpen, setdrawerOpen] = useState(false);

  const toggleDrawerButton = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setdrawerOpen(!drawerOpen)
  };

  return (
    

      <div className={styles.mobileAppbar}>
        <Button onClick={toggleDrawerButton} >
          <MenuIcon fontSize="large" color="inherit" className={styles.icon} />
        </Button>
        <Drawer classes={{ paper: classes.paper }} open={drawerOpen} onClose={toggleDrawerButton}>
          <MenuItem onClick={toggleDrawerButton}><Link href="/"><p className={styles.list}>Accueil</p></Link></MenuItem>
          <MenuItem onClick={toggleDrawerButton}><Link href="/#services"><p className={styles.list}>Service</p></Link></MenuItem>
          <MenuItem onClick={toggleDrawerButton}><Link href="/#references"><p className={styles.list}>References</p></Link></MenuItem>
          <MenuItem onClick={toggleDrawerButton}><Link href="/actualites"><p className={styles.list}>Actualites</p></Link></MenuItem>
          <MenuItem onClick={toggleDrawerButton}><Link href="/#contact"><p className={styles.list}>Contact</p></Link></MenuItem>
        </Drawer>
      </div>





      // {/* <AppBar
      //   className={styles.mobileAppbar}
      //   position="fixed"
      //   color="inherit"
      // >
      //   <div >
      //   <Button onClick={toggleDrawerButton} >
      //     <MenuIcon />
      //   </Button>
      //     <Drawer className={styles.mobileAppbar} open={drawerOpen} onClose={toggleDrawerButton}>
      //       <MenuItem onClick={toggleDrawerButton}><Link className={styles.list} href="/">Accueil</Link></MenuItem>
      //       <MenuItem onClick={toggleDrawerButton}><Link className={styles.list} href="/#services">Services</Link></MenuItem>
      //       <MenuItem onClick={toggleDrawerButton}><Link className={styles.list} href="/#references">References</Link></MenuItem>
      //       <MenuItem onClick={toggleDrawerButton}><Link className={styles.list} href="/actualites">Actualites</Link></MenuItem>
      //       <MenuItem onClick={toggleDrawerButton}><Link className={styles.list} href="/#contact">Contact</Link></MenuItem>
      //     </Drawer>
      //   </div>
      // </AppBar> */}




  );
};

export default Nav;