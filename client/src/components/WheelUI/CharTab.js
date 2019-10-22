import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
//These are the tabs up top.
// the box inside them.
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles(
  (theme) => ({
    'box': {
      'padding': '0 auto 0 2em'
    }
  }));

const CharTab = (props) => {
  const classes = useStyles();
  const { index, value, item, itemLength } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
    // id={`scrollable-auto-tabpanel-${index}`}
    // aria-labelledby={`scrollable-auto-tab-${index}`}
    >
      <Box className={classes.box} p={`${100 / itemLength}%`}>{item}</Box>

    </Typography>);
}

export default CharTab;