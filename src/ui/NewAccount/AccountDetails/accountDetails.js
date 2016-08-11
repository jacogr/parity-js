import React, { Component, PropTypes } from 'react';

import { TextField } from 'material-ui';

import Form from '../../Form';
import FormWrap from '../../FormWrap';
import IdentityIcon from '../../IdentityIcon';

export default class RecoverAccount extends Component {
  static propTypes = {
    address: PropTypes.string,
    name: PropTypes.string,
    phrase: PropTypes.string
  }

  render () {
    return (
      <Form>
        <IdentityIcon
          address={ this.props.address } />
        <FormWrap>
          <TextField
            autoComplete='off'
            disabled
            hintText='A descriptive name for the account'
            floatingLabelText='Account Name'
            fullWidth
            value={ this.props.name } />
        </FormWrap>
        <FormWrap>
          <TextField
            autoComplete='off'
            disabled
            hintText='The network address for the account'
            floatingLabelText='Address'
            fullWidth
            value={ this.props.address } />
        </FormWrap>
        <FormWrap>
          <TextField
            autoComplete='off'
            disabled
            hintText='The account recovery phrase'
            floatingLabelText='Recovery Phrase'
            fullWidth
            multiLine
            rows={ 1 }
            value={ this.props.phrase } />
        </FormWrap>
      </Form>
    );
  }
}
