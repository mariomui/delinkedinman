export const styles = (theme) => ({

  MuiDialog: {
    paper: {
      width: '800px'
    }
  },
  modal: {
  },
  active: {
    filter: 'drop-shadow(2px 4px 6px #C4E4FF)',
    padding: '10px',
    '&:hover': { cursor: 'pointer' },
    '&:active': {
      'background': '#C4E4FF'
    }
  },
  nonactive: {
    filter: 'drop-shadow(2px 4px 6px #FB9999)'
  },
  dialogContent: {
    display: 'grid',
    gridTemplateColumns: '150px 150px 150px 150px 150px',
    gridTemplateAreas: (
      `side  g1 g2
       name  g1 g2`),
    paddingLeft: 115.3 + 'px',
    paddingTop: 102.7 + 'px',
    paddingBottom: 164.2 + 'px',
    paddingRight: 138 + 'px',
  },
  title: {
    minWidth: '777px',
    '+*': {
      display: 'inline-block'
    }
  }
})