import ReactDOM from 'react-dom';
import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import resetStyle from './reset.css';

import Api from './api';
import Application from './components/Application';

const muiTheme = getMuiTheme(darkBaseTheme);
const api = new Api(new Api.Transport.Http('/rpc/'));

ReactDOM.render(
  <div className={ resetStyle.reset }>
    <Application
      api={ api }
      muiTheme={ muiTheme } />
  </div>,
  document.querySelector('#container')
);
