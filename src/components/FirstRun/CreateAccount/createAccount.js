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
    accountName: ''
  }

  render () {
    if (!this.props.visible) {
      return null;
    }

    return (
      <div>
        <p>
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
        </p>
        <p>
          <TextField
            name='accName'
            hintText='A descriptive name for the account'
            floatingLabelText='Account Name'
            value={ this.state.accountName }
            onChange={ this.onEditAccountName } />
        </p>
      </div>
    );
  }

  onEditAccountName = (event) => {
    this.setState({
      accountName: event.target.value
    });
  }
}
