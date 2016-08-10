import React, { Component } from 'react';

import { Tabs, Tab } from 'material-ui/Tabs';

import ActionAccountBalanceWallet from 'material-ui/svg-icons/action/account-balance-wallet';
import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import NavigationApps from 'material-ui/svg-icons/navigation/apps';

export default class TabBar extends Component {
  render () {
    return (
      <Tabs>
        <Tab
          data-route='/accounts'
          icon={ <ActionAccountBalanceWallet /> }
          label='accounts' />
        <Tab
          data-route='/tokens'
          icon={ <ActionDashboard /> }
          label='tokens' />
        <Tab
          data-route='/apps'
          icon={ <NavigationApps /> }
          label='apps' />
      </Tabs>
    );
  }
}
