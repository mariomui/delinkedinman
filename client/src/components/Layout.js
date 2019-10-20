import React from 'react';
import { Mascotsvg } from '../assets/Mascotsvg'
// do not try to refacto this by destructuring. 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

import Button from '@material-ui/core/Button'



import { withStyles } from '@material-ui/styles';
// import { createMuiTheme } from '@material-ui/core/styles';

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
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">

            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '111px', textTransform: 'uppercase' }}>
              <Mascotsvg className={classes.mascot} />

              <span>
                &nbsp;&nbsp;&nbsp;DelinkedinMan
              </span>
            </div>
          </Typography>
          <div className={classes.layoutControlWrapper}>
            <IconButton className={classes.accountInfo} onClick={handleMenu} color="inherit">
              <AccountCircle />
            </IconButton>



            <Button className={classes.login}> Login</Button>

            <Menu
              id="menu-appbar"
              className={classes.menuappbar}
              anchorEl={anchorEl}
              onClose={handleClose}
              open={open}>
              <MenuItem className={classes.menuitem}>Profile</MenuItem>
              <MenuItem className={classes.menuitem}>Account</MenuItem>
            </Menu>
          </div>

        </Toolbar>
      </AppBar>
      {props.children}
    </div >
  )
}

export default withStyles(styles)(Layout);