import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default function FAIcon (props) {
  return <FontAwesomeIcon {...props} icon={['far', props.icon]}></FontAwesomeIcon>
}