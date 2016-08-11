import React, { Component, PropTypes } from 'react';

import { FlatButton } from 'material-ui';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';

import Overlay from '../Overlay';

const STAGE_NAMES = ['creation type', 'new account', 'recovery', 'completed'];

export default class NewAccount extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
  }

  state = {
    stage: 0
  }

  render () {
    return (
      <Overlay
        actions={ this.renderDialogActions() }
        current={ this.state.stage }
        steps={ STAGE_NAMES }
        visible={ this.props.visible }>
        <div>{ this.state.stage }</div>
      </Overlay>
    );
  }

  renderDialogActions () {
    switch (this.state.stage) {
      case 0:
        return (
          <FlatButton
            icon={ <NavigationArrowForward /> }
            label='Next'
            primary
            onTouchTap={ this.onNext } />
        );
      default:
        return [
          <FlatButton
            icon={ <NavigationArrowBack /> }
            label='Back'
            primary
            onTouchTap={ this.onPrev } />,
          <FlatButton
            icon={ <NavigationArrowForward /> }
            label='Next'
            primary
            onTouchTap={ this.onNext } />
        ];
    }
  }

  onNext = () => {
    this.setState({
      stage: this.state.stage + 1
    });
  }

  onPrev = () => {
    this.setState({
      stage: this.state.stage - 1
    });
  }

  onClose = () => {
    this.setState({
      stage: 0,
      type: 0
    }, this.props.onClose);
  }
}
