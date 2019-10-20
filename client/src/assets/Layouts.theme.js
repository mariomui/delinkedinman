let top = 3 + 'px'
let left = top;

export const styles = (theme) => ({
  appbar: {
    display: 'flex',
    justifyContent: 'space-between'
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
    height: 30 + 'px',
    width: 120 + 'px',
    top,
    left,
    padding: '0'
  }
})