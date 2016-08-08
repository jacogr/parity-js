import React, { Component } from 'react';

import { Dialog, FlatButton, TextField } from 'material-ui';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const STAGE_NAMES = ['hello', 'new account', 'account created', 'setup completed'];
const TITLE_STYLE = { borderStyle: 'none' };
const LOGO_STYLE = {
  float: 'right',
  width: '25%',
  height: 'auto'
};

export default class FirstRun extends Component {
  state = {
    stage: 0
  }

  render () {
    const open = true;
    const title = STAGE_NAMES[this.state.stage];

    return (
      <Dialog
        title={ title }
        titleStyle={ TITLE_STYLE }
        actions={ this.renderDialogActions() }
        actionsContainerStyle={ TITLE_STYLE }
        open={ open }
        autoScrollBodyContent
        onRequestClose={ this.onClose }>
        { this.renderPage() }
      </Dialog>
    );
  }

  renderPage () {
    switch (this.state.stage) {
      case 0:
        return this.renderWelcomePage();
      case 1:
        return this.renderCreatePage();
    }
  }

  renderDialogActions () {
    switch (this.state.stage) {
      case 0:
        return (
          <FlatButton
            label='Next'
            primary
            onTouchTap={ this.onNextStage } />
        );
      case 1:
        return (
          <FlatButton
            label='Create'
            primary
            onTouchTap={ this.onNextStage } />
        );
    }
  }

  renderWelcomePage () {
    return (
      <div>
        <img
          src='images/ethcore-logo-white-square.png'
          alt='Ethcore Ltd.'
          style={ LOGO_STYLE } />
        <p>Welcome to <strong>Parity</strong>, the fastest and simplest way to run your node.</p>
        <p>The next few steps will guide you through the process of setting up you Parity instance and the associated account.</p>
        <p>Click <strong>Next</strong> to continue your journey.</p>
      </div>
    );
  }

  renderCreatePage () {
    return (
      <div>
        <p>Setup your primary account below</p>
        <p>
          <TextField
            name='accName'
            hintText='A descriptive name for the account'
            floatingLabelText='Account Name'
            onChange={ this.updateCreateName } />
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
      </div>
    );
  }

    // return [
    //   <FlatButton
    //     label='Cancel'
    //     secondary
    //     onTouchTap={ this.onClose }
    //   />,
    //   <RaisedButton
    //     label='Create'
    //     className={ styles.submit }
    //     primary
    //     disabled={ !this.state.isValid || this.state.isCreatingAccount }
    //     onTouchTap={ this.onSubmit }
    //   />
    // ];

  onClose = () => {

  }

  onNextStage = () => {
    this.setState({
      stage: this.state.stage + 1
    });
  }

  updateCreateName = () => {
  }
}
