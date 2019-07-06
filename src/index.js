import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { SnackbarProvider } from 'notistack';

document.body.style.margin = 0;

ReactDOM.render(<SnackbarProvider maxSnack={4}><App/></SnackbarProvider>, document.getElementById("root"));