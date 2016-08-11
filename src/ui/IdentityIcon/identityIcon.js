import React, { Component, PropTypes } from 'react';
import blockies from 'blockies';

import styles from './style.css';

export default class IdentityIcon extends Component {
  static propTypes = {
    address: PropTypes.string
  }

  state = {
    iconsrc: ''
  }

  componentDidMount () {
    this.updateIcon(this.props.address);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.address === this.props.address) {
      return;
    }

    this.updateIcon(newProps.address);
  }

  updateIcon (address) {
    this.setState({
      iconsrc: blockies({
        seed: address,
        size: 8,
        scale: 8
      }).toDataURL()
    });
  }

  render () {
    return (
      <div className={ styles.icon }>
        <img src={ this.state.iconsrc } />
      </div>
    );
  }
}
