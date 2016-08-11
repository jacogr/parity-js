import React, { Component, PropTypes } from 'react';

import styles from './style.css';

const HIDE_INPUT = { display: 'none' };

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.array
  }

  render () {
    // HACK: hidden inputs to disable Chrome's autocomplete
    return (
      <form
        autoComplete='new-password'
        className={ styles.form }>
        <input style={ HIDE_INPUT } type='text' name='fakeusernameremembered' />
        <input style={ HIDE_INPUT } type='password' name='fakepasswordremembered' />
        { this.props.children }
      </form>
    );
  }
}
