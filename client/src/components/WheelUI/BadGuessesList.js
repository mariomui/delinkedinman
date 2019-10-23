
import React from 'react';
import { makeStyles } from '@material-ui/styles'

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(themer);
function themer(theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row'
    }
  }
}

const BadGuessesList = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>


      {props.badGuesses.map((item) => {
        return (
          <Box >

            <Typography>

              {item}
            </Typography>
          </Box>

        )
      })}

    </div>
  )
}
export default BadGuessesList