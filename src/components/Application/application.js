import React, { Component, PropTypes } from 'react';

import Accounts from '../Accounts';
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
    isFirst: false,
    clientVersion: '',
    peerCount: 0,
    blockNumber: 0,
    accounts: []
  }

  componentWillMount () {
    this.props.api.personal
      .listAccounts()
      .then((accounts) => {
        this.setState({
          accounts: accounts,
          isFirst: true // accounts.length === 0
        });
      });
    setInterval(() => this.pollStatus(), 2500);
  }

  render () {
    return (
      <div className={ styles.container }>
        <FirstRun
          visible={ this.state.isFirst } />
        <Accounts
          accounts={ this.state.accounts } />
        <div className={ styles.status }>
          <div>{ this.state.clientVersion }</div>
          <div>{ this.state.peerCount } peers</div>
          <div>{ this.state.blockNumber }</div>
        </div>
      </div>
    );
  }

  getChildContext () {
    return {
      api: this.props.api,
      muiTheme: this.props.muiTheme
    };
  }

  pollStatus () {
    const api = this.props.api;

    Promise
      .all([
        api.web3.clientVersion(),
        api.net.peerCount(),
        api.eth.blockNumber(),
        api.eth.syncing()
      ])
      .then(([clientVersion, peerCount, blockNumber, syncing]) => {
        this.setState({
          blockNumber: blockNumber.toFormat(0),
          clientVersion: clientVersion,
          peerCount: peerCount.toString(),
          syncing: syncing
        });
      });
  }
}
