import {
    Grid,
  } from '@material-ui/core'

import styles from './footer.module.scss'

const Footer = () => {

    return (

        <Grid className={styles.footer} item xs={12}>
            <h3>footer</h3>
        </Grid>
    );
}


export default Footer;