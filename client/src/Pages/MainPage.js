import React from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'
import { IntroText } from '../components/IntroText';
import Grid from '@material-ui/core/Grid';

import { styles } from '../assets/PageStyles/MainPage.theme'

const MainPage = (props) => {
  const { classes } = props
  return (
    <div>
      <Container className={classes.container} >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <IntroText />
          <Button className={classes.button}> Generate</Button>
        </Grid>
      </Container>
    </div>
  )
}

export default withStyles(styles)(MainPage);