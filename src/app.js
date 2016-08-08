import ReactDOM from 'react-dom';
import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const muiTheme = getMuiTheme(darkBaseTheme);

import resetStyle from './reset.css';

import Api from './api';
import ApiProvider from './components/ApiProvider';
import FirstRun from './components/FirstRun';

const isFirst = true;

const api = new Api(new Api.Transport.Http('/rpc'));

ReactDOM.render(
  <div className={ resetStyle.reset }>
    <ApiProvider api={ api }>
      <MuiThemeProvider muiTheme={ muiTheme }>
        <FirstRun visible={ isFirst } />
      </MuiThemeProvider>
    </ApiProvider>
  </div>,
  document.querySelector('#container')
);
