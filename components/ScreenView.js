import * as React from 'react'
import { View, StyleSheet } from 'react-native'

export function ScreenView ({ children }) {
  return (
    <View style={{ flex: 1 }}>
      {children}
    </View>
  )
}