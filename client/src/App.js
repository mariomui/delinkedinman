import React from 'react';
import Layout from './components/Layout';
import { MuiThemeProvider } from "@material-ui/core/styles";
// import Test from './components/Test';

import MainPage from './Pages/MainPage'
import theme from "./MaterialUI/theme";

const App = () => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Layout>
          <MainPage />
        </Layout>
      </MuiThemeProvider>
    </div>
  )
}

export default App;