import ReactDOM from 'react-dom';
import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import resetStyle from './reset.css';

import Api from './api';
import Application from './components/Application';
import FirstRun from './components/FirstRun';

const isFirst = true;
const muiTheme = getMuiTheme(darkBaseTheme);
const api = new Api(new Api.Transport.Http('http://localhost:8545'));

ReactDOM.render(
  <div className={ resetStyle.reset }>
    <Application
      api={ api }
      muiTheme={ muiTheme }>
      <FirstRun
        visible={ isFirst } />
    </Application>
  </div>,
  document.querySelector('#container')
);
