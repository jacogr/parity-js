import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.array
  }
  render () {
    return (
      <form
        autoComplete='off'>
        { this.props.children }
      </form>
    );
  }
}
