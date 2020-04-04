import * as React from 'react';
import FAIcon from './FAIcon'

import Colors from '../constants/Colors';

export default function TabBarIcon (props) {
  return (
    <FAIcon
      icon={props.name}
      size={24}
      style={{ marginBottom: -10 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
