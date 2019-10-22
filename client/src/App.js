import React from 'react';
import { LosePage } from './Pages/LosePage'
// import { MuiThemeProvider } from "@material-ui/core/styles";
// import theme from "./MaterialUI/theme";

import HomePage from './Pages/HomePage'
// import Modal from './components/Modal'
// import HelloView from './Pages/HelloView'
// import './assets/global.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* <MuiThemeProvider theme={theme}> */}
      <Router>
        <Switch>
          <Route exact path='/'
            component={HomePage}
          />
          <Route path='/LosePage'
            component={LosePage}
          />
        </Switch>
      </Router>
      {/* </MuiThemeProvider> */}
    </div >
  )
}

export default App;