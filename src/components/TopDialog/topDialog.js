import React, { Component, PropTypes } from 'react';

import { Dialog } from 'material-ui';

const TITLE_STYLE = { borderStyle: 'none' };
const DIALOG_STYLE = { paddingTop: '1px' };
const CONTENT_STYLE = { transform: 'translate(0px, 0px)' };

export default class TopDialog extends Component {
  static propTypes = {
    actions: PropTypes.object,
    children: PropTypes.array,
    open: PropTypes.bool,
    title: React.PropTypes.oneOfType([
      PropTypes.object, PropTypes.string
    ])
  }

  render () {
    return (
      <Dialog
        actions={ this.props.actions }
        actionsContainerStyle={ TITLE_STYLE }
        autoDetectWindowHeight={ false }
        autoScrollBodyContent={ false }
        contentStyle={ CONTENT_STYLE }
        modal
        open={ this.props.open }
        repositionOnUpdate={ false }
        style={ DIALOG_STYLE }
        title={ this.props.title }
        titleStyle={ TITLE_STYLE }>
        { this.props.children }
      </Dialog>
    );
  }
}
