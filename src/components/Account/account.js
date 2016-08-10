import React, { Component, PropTypes } from 'react';

import { TextField } from 'material-ui';
import { Card, CardText, CardTitle } from 'material-ui/Card';

import Balances from '../Balances';
import Form from '../Form';
import FormWrap from '../FormWrap';
import IdentityIcon from '../IdentityIcon';

import Actions from './actions';

export default class Account extends Component {
  static contextTypes = {
    api: React.PropTypes.object
  }

  static propTypes = {
    params: PropTypes.object
  }

  state = {
    name: 'Unnamed'
  }

  render () {
    const address = this.props.params.address;

    return (
      <div>
        <Actions />
        <Card>
          <IdentityIcon
            address={ address } />
          <CardText>
            <Form>
              <FormWrap>
                <TextField
                  autoComplete='off'
                  floatingLabelText='Account Name'
                  fullWidth
                  hintText='A descriptive name for the account'
                  value={ this.state.name }
                  onChange={ this.onEditName } />
                <TextField
                  autoComplete='off'
                  disabled
                  floatingLabelText='Account Address'
                  fullWidth
                  hintText='The network address'
                  value={ address } />
              </FormWrap>
            </Form>
            <Balances
              address={ address } />
          </CardText>
        </Card>
      </div>
    );
  }

  onEditName = (event) => {
    this.setState({
      name: event.target.value
    });
  }
}
