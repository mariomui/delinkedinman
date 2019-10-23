import React from 'react';
import CharTab from './CharTab';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: '100vw',
    postion: 'absolute',
    left: '0px',
    top: '70vh',
    // padding: '8vh 10vw auto 10vw',
    minHeight: '22vh'
  },
  bottomTabs: {
    background: 'transparent',
    width: '90vw',
    marginTop: '10vh',

  },
  singleTab: {
    fontSize: '2rem',
    padding: 'auto .2em 0em .2em',
    minWidth: '5vw',
    marginRight: '1em',
    borderBottom: '10px solid black',

  },
  MuiTabWrapper: {
    padding: '0px',

  },
  tabBar: {
    display: 'flex',

  },
  charTab: {
    background: 'blue'
  }

}));

const Board = (props) => {
  const { currentWordView, secretWord } = props;
  const classes = useStyles({ length: currentWordView.length });
  return (

    <div className={classes.root} >
      <div className={classes.tabBar}>
        {currentWordView.map((item, i) => {
          return (
            <CharTab
              className={classes.charTab}
              item={item}
              key={i + 'x'}
              index={i}
              // value={item}
              secretWord={secretWord}
              itemLength={currentWordView.length}
            />
          );
        })}
      </div>

      <AppBar className={classes.appBar} color="default">
        <Tabs className={classes.bottomTabs}
          indicatorColor="primary"
          textColor="primary"
          centered={true}
          value={secretWord}
        >
          {/* These are all the individual tab in the bottom */}
          {currentWordView.map((item, index) => {
            return (
              <Tab
                className={classes.singleTab}
                key={index}
                value={secretWord}
                label={`${item === '~' ? secretWord[index] : ' '}`}>
              </Tab>);
          })};
        </Tabs>
      </AppBar>


    </div >

  );
}
export default Board;

