import React, { Component, PropTypes } from 'react';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import styles from '../style.css';

export default class CreationType extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        <div className={ styles.info }>
          Select the creation type, either as a new account or importing from an existing resource
        </div>
        <RadioButtonGroup
          defaultSelected='fromNew'
          name='creationType'
          onChange={ this.onChange }>
          <RadioButton
            label='Create new account'
            value='fromNew' />
          <RadioButton
            label='Import account from JSON file'
            value='fromJSON' />
          <RadioButton
            label='Import account from pre-sale wallet'
            value='fromPresale' />
        </RadioButtonGroup>
      </div>
    );
  }

  onChange = (value) => {
    this.props.onChange(value);
  }
}