import React, { Component, PropTypes } from 'react';

import { FlatButton } from 'material-ui';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionDoneAll from 'material-ui/svg-icons/action/done-all';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

import TopDialog from '../TopDialog';

import Completed from './Completed';
import CreateAccount from './CreateAccount';
import RecoverAccount from './RecoverAccount';
import Welcome from './Welcome';

import styles from './style.css';

const STAGE_NAMES = ['welcome', 'new account', 'recovery', 'completed'];

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
      <TopDialog
        actions={ this.renderDialogActions() }
        open={ this.state.open }
        title={ this.renderStepper() }>
        <Welcome
          visible={ this.state.stage === 0 } />
        <CreateAccount
          visible={ this.state.stage === 1 } />
        <RecoverAccount
          accountName='Newly Created Name'
          accountAddress='0xF6ABb80F11f269e4500A05721680E0a3AB075Ecf'
          accountPhrase='twenty never horse quick battery foot staple rabbit skate chair'
          visible={ this.state.stage === 2 } />
        <Completed
          visible={ this.state.stage === 3 } />
      </TopDialog>
    );
  }

  renderStepper () {
    const steps = STAGE_NAMES.map((label) => {
      return (
        <Step
          key={ label }>
          <StepLabel>
            { label }
          </StepLabel>
        </Step>
      );
    });

    return (
      <div>
        <h2 className={ styles.title }>
          { STAGE_NAMES[this.state.stage] }
        </h2>
        <Stepper
          activeStep={ this.state.stage }>
          { steps }
        </Stepper>
      </div>
    );
  }

  renderDialogActions () {
    switch (this.state.stage) {
      case 0:
      case 2:
        return (
          <FlatButton
            icon={ <NavigationArrowForward /> }
            label='Next'
            primary
            onTouchTap={ this.onBtnNext } />
        );
      case 1:
        return (
          <FlatButton
            icon={ <ActionDone /> }
            label='Create'
            primary
            onTouchTap={ this.onBtnNext } />
        );
      case 3:
        return (
          <FlatButton
            icon={ <ActionDoneAll /> }
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
