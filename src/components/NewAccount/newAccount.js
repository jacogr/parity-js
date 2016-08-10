import React, { Component, PropTypes } from 'react';

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
        title={ this.renderStepper() }
        visible={ this.props.visible }>
        <div>dialog</div>
      </Overlay>
    );
  }

  renderDialogActions () {
  }

  renderStepper () {
  }

  onClose = () => {
    this.setState({
      stage: 0,
      type: 0
    }, this.props.onClose);
  }
}
