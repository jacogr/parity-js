import React, { Component, PropTypes } from 'react';

import AutoComplete from 'material-ui/AutoComplete';
import rpcMethods from 'ethereum-jsonrpc';
const rpcMethodsNames = Object.keys(rpcMethods).map(moduleName => {
  return Object.keys(rpcMethods[moduleName]).map(methodName => {
    return `${moduleName}_${methodName}`;
  });
});

export default class RpcAutoComplete extends Component {

  static propTypes = {
    onNewRequest: PropTypes.func.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    floatingLabelText: PropTypes.string,
    filter: PropTypes.func,
    openOnFocus: PropTypes.bool
  };

  static defaultProps = {
    filter: (searchText, key) => searchText === '' || key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1,
    name: 'RpcAutoComplete', // avoid material ui key bug
    openOnFocus: true,
    floatingLabelText: 'Choose Method'
  };

  shouldComponentUpdate () {
    return false;
  }

  render () {
    return (
      <AutoComplete
        dataSource={ rpcMethodsNames }
        { ...this.props }
      />
    );
  }
}
