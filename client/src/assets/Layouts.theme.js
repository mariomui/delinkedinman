

let top = 3 + 'px'
let left = top;

export const styles = (theme) => ({
  appbar: {

    backgroundColor: '#2196F3',
    overflow: 'hidden',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid white'
  },
  menuitem: {
    minWidth: `${theme.spacing(1.3)}vw`
  },
  layoutControlWrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 139 + 'px',
    height: 60 + 'px',
  },
  accountInfo: {
    position: 'absolute',
    top,
    left
  },
  login: {
    position: 'absolute',
    height: 45 + 'px',
    width: 120 + 'px',
    top: 0 + 'px',
    left,
    padding: '0'
  }
})