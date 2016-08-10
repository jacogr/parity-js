import React, { Component } from 'react';

import { FlatButton } from 'material-ui';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import ActionAccountBalance from 'material-ui/svg-icons/action/account-balance';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentSend from 'material-ui/svg-icons/content/send';

export default class Actions extends Component {
  render () {
    return (
      <Toolbar>
        <ToolbarGroup>
          <FlatButton
            icon={ <ContentSend /> }
            label='transfer'
            primary
            onTouchTap={ this.onBtnClose } />
          <FlatButton
            icon={ <ContentAdd /> }
            label='new account'
            primary
            onTouchTap={ this.onBtnClose } />
          <FlatButton
            icon={ <ActionAccountBalance /> }
            label='fund account'
            primary
            onTouchTap={ this.onBtnClose } />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
