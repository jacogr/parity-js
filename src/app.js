import ReactDOM from 'react-dom';
import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const muiTheme = getMuiTheme(darkBaseTheme);

console.log('Hello world');

ReactDOM.render(
  <MuiThemeProvider muiTheme={ muiTheme }>
    <div>Hello world</div>
  </MuiThemeProvider>,
  document.querySelector('#container')
);
