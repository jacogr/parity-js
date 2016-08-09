import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/Paper';

import Account from './Account';

import styles from './style.css';

export default class Accounts extends Component {
  static propTypes = {
    accounts: PropTypes.array.isRequired
  }

  render () {
    const accounts = this.props.accounts.map((account) => {
      return (
        <div className={ styles.account }>
          <Paper>
            <Account address={ account } />
          </Paper>
        </div>
      );
    });

    return (
      <div className={ styles.accounts }>
        { accounts }
      </div>
    );
  }
}
