import React, { Component, PropTypes } from 'react';

import FirstRun from '../FirstRun';

import styles from './style.css';

export default class Application extends Component {
  static childContextTypes = {
    api: PropTypes.object,
    muiTheme: PropTypes.object
  }

  static propTypes = {
    api: PropTypes.object.isRequired,
    muiTheme: PropTypes.object.isRequired
  }

  state = {
    isFirst: false
  }

  componentWillMount () {
    this.props.api.personal
      .listAccounts()
      .then((accounts) => {
        this.setState({
          isFirst: true // accounts.length === 0
        });
      });
  }

  render () {
    return (
      <div className={ styles.container }>
        <FirstRun
          visible={ this.state.isFirst } />
      </div>
    );
  }

  getChildContext () {
    return {
      api: this.props.api,
      muiTheme: this.props.muiTheme
    };
  }
}
