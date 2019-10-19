import React from 'react';
import { Layout } from './components/Layout';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Test from './components/Test';

import theme from "./MaterialUI/theme";

const App = () => {
  return (
    <div>

      <MuiThemeProvider theme={theme}>
        <Layout>
          <button>dkddddjk</button>
          <Test />
        </Layout>
        ee
      </MuiThemeProvider>
    </div>
  )
}

export default App;