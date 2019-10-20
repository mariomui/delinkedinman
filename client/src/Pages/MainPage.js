import React from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'
import { styles } from '../assets/PageStyles/MainPage.theme'
const MainPage = (props) => {
  const { classes } = props
  return (
    <div>
      <Container className={classes.container} >
        <Button className={classes.button}> Generate</Button>
      </Container>
    </div>
  )
}

export default withStyles(styles)(MainPage);