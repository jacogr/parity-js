import React, { Component, PropTypes } from 'react';

import { TextField } from 'material-ui';

import FormWrap from '../../FormWrap';
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
        <FormWrap>
          <TextField
            hintText='A descriptive name for the account'
            floatingLabelText='Account Name'
            fullWidth
            value={ this.props.accountName } />
        </FormWrap>
        <FormWrap>
          <TextField
            hintText='The network address for the account'
            floatingLabelText='Address'
            fullWidth
            value={ this.props.accountAddress } />
        </FormWrap>
        <FormWrap>
          <TextField
            hintText='The account recovery phrase'
            floatingLabelText='Recovery Phrase'
            fullWidth
            multiLine
            rows={ 2 }
            value={ this.props.accountPhrase } />
        </FormWrap>
      </div>
    );
  }
}
