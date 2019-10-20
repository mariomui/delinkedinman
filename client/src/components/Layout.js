import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { withStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import { styles } from '../assets/Layouts.theme'




const Layout = (props) => {
  // set the anchorElement in state to null
  // create the function setAnchorEl to setState
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { classes } = props;
  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbar}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Delinkedin Man
          </Typography>
          <IconButton onClick={handleMenu} color="inherit">
            <AccountCircle />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            onClose={handleClose}
            open={open}>
            <MenuItem className={classes.menuitem}>Profile</MenuItem>
            <MenuItem className={classes.menuitem}>Account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      {props.children}
    </div >
  )
}

export default withStyles(styles)(Layout);