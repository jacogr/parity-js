import React, { Component, PropTypes } from 'react';

import { FlatButton } from 'material-ui';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import ActionAccountBalance from 'material-ui/svg-icons/action/account-balance';
import ActionAccountBalanceWallet from 'material-ui/svg-icons/action/account-balance-wallet';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentSend from 'material-ui/svg-icons/content/send';

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
        <Tabs>
          <Tab
            icon={ <ActionAccountBalanceWallet /> }
            label='accounts' />
          <Tab
            icon={ <ActionDashboard /> }
            label='tokens' />
        </Tabs>
        <Toolbar>
          <ToolbarGroup>
            <FlatButton
              icon={ <ContentSend /> }
              label='transfer'
              primary
              onTouchTap={ this.onBtnClose } />
            <FlatButton
              icon={ <ContentAdd /> }
              label='new account'
              primary
              onTouchTap={ this.onBtnClose } />
            <FlatButton
              icon={ <ActionAccountBalance /> }
              label='fund account'
              primary
              onTouchTap={ this.onBtnClose } />
          </ToolbarGroup>
        </Toolbar>
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
