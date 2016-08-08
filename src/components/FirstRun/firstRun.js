import React, { Component, PropTypes } from 'react';

import { Dialog, FlatButton } from 'material-ui';

import Completed from './Completed';
import CreateAccount from './CreateAccount';
import RecoverAccount from './RecoverAccount';
import Welcome from './Welcome';

const STAGE_NAMES = ['hello', 'new account', 'account created', 'setup completed'];
const TITLE_STYLE = { borderStyle: 'none' };

export default class FirstRun extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired
  }

  state = {
    open: true,
    stage: 0
  }

  render () {
    if (!this.props.visible) {
      return null;
    }

    return (
      <Dialog
        title={ STAGE_NAMES[this.state.stage] }
        titleStyle={ TITLE_STYLE }
        actions={ this.renderDialogActions() }
        actionsContainerStyle={ TITLE_STYLE }
        open={ this.state.open }
        autoScrollBodyContent
        onRequestClose={ this.onClose }>
        <Welcome visible={ this.state.stage === 0 } />
        <CreateAccount visible={ this.state.stage === 1 } />
        <RecoverAccount visible={ this.state.stage === 2 } />
        <Completed visible={ this.state.stage === 3 } />
      </Dialog>
    );
  }

  renderDialogActions () {
    switch (this.state.stage) {
      case 0:
      case 2:
        return (
          <FlatButton
            label='Next'
            primary
            onTouchTap={ this.onBtnNext } />
        );
      case 1:
        return (
          <FlatButton
            label='Create'
            primary
            onTouchTap={ this.onBtnNext } />
        );
      case 3:
        return (
          <FlatButton
            label='Close'
            primary
            onTouchTap={ this.onBtnClose } />
      );
    }
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

  onBtnClose = () => {
    this.setState({
      open: false
    });
  }

  onBtnNext = () => {
    this.setState({
      stage: this.state.stage + 1
    });
  }
}
