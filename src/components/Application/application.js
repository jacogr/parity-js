import React, { Component, PropTypes } from 'react';

import styles from './style.css';

export default class Application extends Component {
  static childContextTypes = {
    api: PropTypes.object,
    muiTheme: PropTypes.object
  }

  static propTypes = {
    api: PropTypes.object.isRequired,
    children: PropTypes.object,
    muiTheme: PropTypes.object.isRequired
  }

  getChildContext () {
    return {
      api: this.props.api,
      muiTheme: this.props.muiTheme
    };
  }

  render () {
    return (
      <div className={ styles.container }>
        { this.props.children }
      </div>
    );
  }
}
