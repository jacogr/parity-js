import React, { Component, PropTypes } from 'react';

import { TextField } from 'material-ui';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import FormWrap from '../../FormWrap';

export default class CreateAccount extends Component {
  static contextTypes = {
    api: PropTypes.object.isRequired
  }

  static propTypes = {
    visible: PropTypes.bool.isRequired
  }

  state = {
    accountName: '',
    password1: '',
    password2: ''
  }

  render () {
    if (!this.props.visible) {
      return null;
    }

    return (
      <div>
        <FormWrap>
          <RadioButtonGroup
            defaultSelected='new'
            name='createType'>
            <RadioButton
              value='new'
              label='Create new account' />
            <RadioButton
              value='import'
              label='Import existing account' />
          </RadioButtonGroup>
        </FormWrap>
        <FormWrap>
          <TextField
            hintText='A descriptive name for the account'
            floatingLabelText='Account Name'
            fullWidth
            value={ this.state.accountName }
            onChange={ this.onEditAccountName } />
        </FormWrap>
        <FormWrap>
          <TextField
            hintText='A strong, unique password'
            floatingLabelText='Password'
            fullWidth
            type='password'
            value={ this.state.password1 }
            onChange={ this.onEditPassword1 } />
        </FormWrap>
        <FormWrap>
          <TextField
            hintText='A strong, unique password'
            floatingLabelText='Password (repeat)'
            fullWidth
            type='password'
            value={ this.state.password2 }
            onChange={ this.onEditPassword2 } />
        </FormWrap>
      </div>
    );
  }

  onEditAccountName = (event) => {
    this.setState({
      accountName: event.target.value
    });
  }

  onEditPassword1 = (event) => {
    this.setState({
      password1: event.target.value
    });
  }

  onEditPassword2 = (event) => {
    this.setState({
      password2: event.target.value
    });
  }
}
