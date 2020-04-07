import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../ui'
import * as R from 'ramda'

export function ProgressBar ({ progress }) {
  const width = R.defaultTo(0, progress)
  return (
    <View style={styles.outer}>
      <View style={{ ...styles.inner, width: `${width}%` }}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  outer: {
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 4,
    overflow: 'hidden'
  },
  inner: {
    height: '100%',
    backgroundColor: Colors.tintColor,
  }
})