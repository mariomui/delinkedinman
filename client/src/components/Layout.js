import React from 'react';
import { AppBar } from '@material-ui/core';

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar>
        <h1>DelinkedIn Man</h1>
      </AppBar>
      {children}
    </div>
  )
}