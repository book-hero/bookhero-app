import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function FAIcon (props) {
  const size = props.size || 24
  const iconStyle = props.iconStyle || 'far'
  return <FontAwesomeIcon {...props} icon={[iconStyle, props.icon]} size={size}></FontAwesomeIcon>
}