import { render } from 'react-dom';
import React from 'react';
import App from './App'
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./MaterialUI/theme";
render(
  <MuiThemeProvider theme={theme}>

    <App />
  </MuiThemeProvider>
  , document.getElementById('app'));