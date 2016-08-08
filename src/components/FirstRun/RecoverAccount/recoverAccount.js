import React, { Component, PropTypes } from 'react';

import { TextField } from 'material-ui';

export default class RecoverAccount extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired
  }

  render () {
    if (!this.props.visible) {
      return null;
    }

    return (
      <div>
      </div>
    );
  }
}
