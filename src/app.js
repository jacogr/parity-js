import ReactDOM from 'react-dom';
import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import resetStyle from './reset.css';

import Api from './api';
import Application from './components/Application';

const lightTheme = getMuiTheme(lightBaseTheme);
const muiTheme = getMuiTheme(darkBaseTheme);
const api = new Api(new Api.Transport.Http('/rpc/'));

muiTheme.stepper.textColor = '#eee';
muiTheme.stepper.disabledTextColor = '#777';
muiTheme.tabs = lightTheme.tabs;
muiTheme.toolbar = lightTheme.toolbar;
muiTheme.toolbar.backgroundColor = 'rgb(80, 80, 80)';

console.log(muiTheme);

ReactDOM.render(
  <div className={ resetStyle.reset }>
    <Application
      api={ api }
      muiTheme={ muiTheme } />
  </div>,
  document.querySelector('#container')
);
