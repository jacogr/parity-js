import React, { Component, PropTypes } from 'react';

import IdentityIcon from '../../IdentityIcon';

export default class Account extends Component {
  static propTypes = {
    address: PropTypes.string.isRequired
  }

  render () {
    return (
      <div>
        <IdentityIcon
          address={ this.props.address } />
        <div>{ this.props.address }</div>
      </div>
    );
  }
}
