import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { Card, CardText, CardTitle } from 'material-ui/Card';

import Balances from '../../Balances';
import IdentityIcon from '../../IdentityIcon';

const TITLE_STYLE = { textTransform: 'uppercase', paddingBottom: 0 };

export default class AccountSummary extends Component {
  static contextTypes = {
    api: React.PropTypes.object
  }

  static propTypes = {
    address: PropTypes.string.isRequired
  }

  state = {
    name: 'Unnamed'
  }

  render () {
    const viewLink = `/account/${this.props.address}`;

    return (
      <Card>
        <IdentityIcon
          address={ this.props.address } />
        <CardTitle
          style={ TITLE_STYLE }
          title={ <Link to={ viewLink }>{ this.state.name }</Link> } />
        <CardText>
          <Balances
            address={ this.props.address } />
        </CardText>
      </Card>
    );
  }
}
