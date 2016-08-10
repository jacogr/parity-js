import React, { Component, PropTypes } from 'react';

import FirstRun from '../FirstRun';
import Routes from './Routes';
import Status from './Status';
import TabBar from './TabBar';

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
    isFirst: false,
    accounts: []
  }

  componentWillMount () {
    this.retrieveAccounts();
  }

  render () {
    return (
      <div className={ styles.container }>
        <FirstRun
          visible={ this.state.isFirst } />
        <TabBar />
        <Routes />
        <Status />
      </div>
    );
  }

  getChildContext () {
    return {
      api: this.props.api,
      muiTheme: this.props.muiTheme
    };
  }

  retrieveAccounts () {
    this.props.api.personal
      .listAccounts()
      .then((accounts) => {
        this.setState({
          accounts: accounts,
          isFirst: accounts.length === 0
        });
      });
  }
}
