import React, { Component, PropTypes } from 'react';

export default class ApiProvider extends Component {
  static childContextTypes = {
    api: PropTypes.object
  }

  static propTypes = {
    api: PropTypes.object.isRequired,
    children: PropTypes.object
  }

  getChildContext () {
    return {
      api: this.props.api
    };
  }

  render () {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}
