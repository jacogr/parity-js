import ReactDOM from 'react-dom';
import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const muiTheme = getMuiTheme(darkBaseTheme);

import resetStyle from './reset.css';

import FirstRun from './components/FirstRun';

ReactDOM.render(
  <div className={ resetStyle.reset }>
    <MuiThemeProvider muiTheme={ muiTheme }>
      <FirstRun />
    </MuiThemeProvider>
  </div>,
  document.querySelector('#container')
);
