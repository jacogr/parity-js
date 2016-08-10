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
muiTheme.inkBar.backgroundColor = 'rgb(0, 151, 167)';
muiTheme.tabs = lightTheme.tabs;
muiTheme.tabs.backgroundColor = 'rgb(65, 65, 65)';
muiTheme.toolbar = lightTheme.toolbar;
muiTheme.toolbar.backgroundColor = 'rgb(80, 80, 80)';

ReactDOM.render(
  <Application
    api={ api }
    className={ resetStyle.reset }
    muiTheme={ muiTheme } />,
  document.querySelector('#container')
);
