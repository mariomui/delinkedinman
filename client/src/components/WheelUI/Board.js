import React from 'react';
import CharTab from './CharTab';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {

    backgroundColor: theme.palette.background.paper,
  },
  bottomTabs: {
    background: 'transparent',
    width: '100vw'
  },
  singleTab: {
    fontSize: '3rem',
    padding: '0px',
    minWidth: '10px',
    marginRight: '1em'
  },
  tabBar: {
    display: 'flex',
  },

}));

const Board = (props) => {
  const { currentWordView } = props;
  const classes = useStyles({ length: currentWordView.length });
  return (
    <div className={classes.root} >
      <div className={classes.tabBar}>
        {currentWordView.map((item, i) => {
          return (
            <CharTab
              item={item}
              index={i}
              value={item}
              itemLength={currentWordView.length}
            />
          );
        })}
      </div>
      <AppBar position="relative" color="default">
        <Tabs className={classes.bottomTabs}
          indicatorColor="primary"
          textColor="primary"
          centered={true}
        >
          {/* These are all the individual tab in the bottom */}
          {currentWordView.map((item, index) => {
            return (
              <Tab
                className={classes.singleTab}
                label={`${item}`}>
              </Tab>);
          })};
        </Tabs>
      </AppBar>


    </div >

  );
}
export default Board;

