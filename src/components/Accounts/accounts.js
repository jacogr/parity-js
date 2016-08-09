import React, { Component } from 'react';

import { FlatButton } from 'material-ui';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import ActionAccountBalance from 'material-ui/svg-icons/action/account-balance';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentSend from 'material-ui/svg-icons/content/send';

import Account from './Account';

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
    console.log(this.context);
    return (
      <div>
        { this.renderTools() }
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

    const accounts = this.state.accounts.map((account) => {
      return (
        <div
          className={ styles.account }
          key={ account }>
          <Account
            address={ account } />
        </div>
      );
    });

    return accounts;
  }

  renderTools () {
    return (
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
    );
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
