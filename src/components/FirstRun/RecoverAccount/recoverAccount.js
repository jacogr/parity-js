import React, { Component, PropTypes } from 'react';

import { TextField } from 'material-ui';

import IdentityIcon from '../../IdentityIcon';

export default class RecoverAccount extends Component {
  static propTypes = {
    accountAddress: PropTypes.string,
    accountName: PropTypes.string,
    accountPhrase: PropTypes.string,
    visible: PropTypes.bool.isRequired
  }

  render () {
    if (!this.props.visible) {
      return null;
    }

    return (
      <div>
        <IdentityIcon address={ this.props.accountAddress } />
        <div>
          <TextField
            name='accName'
            hintText='A descriptive name for the account'
            floatingLabelText='Account Name'
            value={ this.props.accountName } />
        </div>
        <div>
          <TextField
            name='accAddr'
            hintText='The network address for the account'
            floatingLabelText='Address'
            value={ this.props.accountAddress } />
        </div>
        <div>
          <TextField
            name='accPhrase'
            hintText='The account recovery phrase'
            floatingLabelText='Recovery Phrase'
            multiLine
            rows={ 2 }
            value={ this.props.accountPhrase } />
        </div>
      </div>
    );
  }
}
