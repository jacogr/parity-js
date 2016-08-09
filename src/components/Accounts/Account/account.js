import React, { Component, PropTypes } from 'react';

import { Card, CardText, CardTitle } from 'material-ui/Card';

import IdentityIcon from '../../IdentityIcon';

const CARD_STYLE = { backgroundColor: 'transparent' };

export default class Account extends Component {
  static contextTypes = {
    api: React.PropTypes.object
  }

  static propTypes = {
    address: PropTypes.string.isRequired
  }

  state = {
    name: '',
    balances: []
  }

  componentWillMount () {
    console.log(this.context);
    this.retrieveInfo();
  }

  render () {
    return (
      <Card
        style={ CARD_STYLE }>
        <IdentityIcon
          address={ this.props.address } />
        <CardTitle
          title={ this.state.name } />
        <CardText>
          <div>{ this.props.address }</div>
          { this.renderBalances() }
        </CardText>
      </Card>
    );
  }

  renderBalances () {
    return (
      <div></div>
    );
  }

  retrieveInfo () {
    console.log(this.context);
    const api = this.context.api;

    Promise
      .all([
        api.eth.getBalance(this.props.address)
      ])
      .then(([balance]) => {
        console.log(this.props.address, balance);
      });
  }
}
