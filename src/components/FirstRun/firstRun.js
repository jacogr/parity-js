import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const STAGE_NAMES = ['hello', 'new account', 'account created', 'setup completed'];

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
        actions={ this.renderDialogActions() }
        open={ open }
        autoScrollBodyContent
        onRequestClose={ this.onClose } />
    );
  }

  renderDialogActions () {
    switch (this.state.stage) {
      case 0:
        return (
          <FlatButton
            label='Next'
            primary
            onTouchTap={ this.onNextStage }
          />
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
  }

  onClose = () => {

  }

  onNextStage = () => {
    this.setState({
      stage: this.state.stage + 1
    });
  }
}
