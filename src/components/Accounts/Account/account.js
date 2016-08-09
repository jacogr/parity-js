import React, { Component, PropTypes } from 'react';

import { Card, CardText, CardTitle } from 'material-ui/Card';

import IdentityIcon from '../../IdentityIcon';

const CARD_STYLE = { backgroundColor: 'transparent' };

export default class Account extends Component {
  static propTypes = {
    address: PropTypes.string.isRequired
  }

  render () {
    return (
      <Card
        style={ CARD_STYLE }>
        <IdentityIcon
          address={ this.props.address } />
        <CardTitle
          title='name to go here' />
        <CardText>
          <div>{ this.props.address }</div>
        </CardText>
      </Card>
    );
  }
}
