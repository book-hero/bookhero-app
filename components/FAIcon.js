import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function FAIcon (props) {
  const size = props.size || 24
  return <FontAwesomeIcon {...props} icon={['far', props.icon]} size={size}></FontAwesomeIcon>
}