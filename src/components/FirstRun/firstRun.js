import React, { Component, PropTypes } from 'react';

import { Dialog, FlatButton } from 'material-ui';

import CreateAccount from './CreateAccount';
import Welcome from './Welcome';

const STAGE_NAMES = ['hello', 'new account', 'account created', 'setup completed'];
const TITLE_STYLE = { borderStyle: 'none' };

export default class FirstRun extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired
  }

  state = {
    stage: 0
  }

  render () {
    if (!this.props.visible) {
      return null;
    }

    const title = STAGE_NAMES[this.state.stage];

    return (
      <Dialog
        title={ title }
        titleStyle={ TITLE_STYLE }
        actions={ this.renderDialogActions() }
        actionsContainerStyle={ TITLE_STYLE }
        open
        autoScrollBodyContent
        onRequestClose={ this.onClose }>
        <Welcome visible={ this.state.stage === 0 } />
        <CreateAccount visible={ this.state.stage === 1 } />
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
}
