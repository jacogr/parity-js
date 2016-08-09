import React, { Component, PropTypes } from 'react';

import { TextField } from 'material-ui';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

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
        <div>
          <RadioButtonGroup
            name='accType'
            defaultSelected='new'>
            <RadioButton
              value='new'
              label='Create new account' />
            <RadioButton
              value='import'
              label='Import existing account' />
          </RadioButtonGroup>
        </div>
        <div>
          <TextField
            name='accName'
            hintText='A descriptive name for the account'
            floatingLabelText='Account Name'
            value={ this.state.accountName }
            onChange={ this.onEditAccountName } />
        </div>
        <div>
          <TextField
            name='accPass1'
            hintText='A strong, unique password'
            floatingLabelText='Password'
            type='password'
            value={ this.state.password1 }
            onChange={ this.onEditPassword1 } />
        </div>
        <div>
          <TextField
            name='accPass2'
            hintText='A strong, unique password'
            floatingLabelText='Password (repeat)'
            type='password'
            value={ this.state.password2 }
            onChange={ this.onEditPassword2 } />
        </div>
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
