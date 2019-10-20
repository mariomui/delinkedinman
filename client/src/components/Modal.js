import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


const styles = (theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
})
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      onClose: true
    }
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const classes = this.props;
    return (
      <div>


        <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h6">{this.props.children}</Typography>
          {this.state.onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={this.onClose}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </MuiDialogTitle>
      </div>
    )
  }
}

export default withstyles(styles)(Modal);