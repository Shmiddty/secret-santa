import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './components/Routes';
import MomentUtils from "@date-io/moment";
import {ThemeProvider} from "@material-ui/styles";
import theme from "./lib/theme";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import CssBaseline from "@material-ui/core/CssBaseline";
import {SnackbarProvider} from "notistack";

export default () => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline/>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  )
}
