import React, { Component } from 'react';

import AccountSummary from './AccountSummary';
import Actions from './Actions';

import styles from './style.css';

export default class Accounts extends Component {
  static contextTypes = {
    api: React.PropTypes.object
  }

  state = {
    accounts: []
  }

  componentWillMount () {
    this.retrieveAccounts();
  }

  render () {
    return (
      <div>
        <Actions />
        <div className={ styles.accounts }>
          { this.renderAccounts() }
        </div>
      </div>
    );
  }

  renderAccounts () {
    if (!this.state.accounts.length) {
      return null;
    }

    return this.state.accounts.map((account) => {
      return (
        <div
          className={ styles.account }
          key={ account }>
          <AccountSummary
            address={ account } />
        </div>
      );
    });
  }

  retrieveAccounts () {
    this.context.api.personal
      .listAccounts()
      .then((accounts) => {
        this.setState({
          accounts: accounts
        });
      });
  }
}
