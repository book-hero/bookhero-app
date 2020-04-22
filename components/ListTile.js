import * as React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Colors, Spacing } from '../ui'
import FAIcon from './FAIcon'

export function ListTile (props) {
  return <View style={styles.tile}>{props.children}</View>
}

export function ListTileWithButton (props) {
  return (
    <View style={styles.tileGroup}>
      <ListTile>{props.children}</ListTile>
      <TouchableOpacity style={styles.button}>
        <FAIcon icon='plus' color='black'></FAIcon>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  tile: {
    backgroundColor: Colors.white,
    padding: Spacing.medium,
    marginVertical: Spacing.small / 2,
    marginHorizontal: Spacing.small,
    flexDirection: 'row',
    flex: 1
  },
  tileGroup: {
    flexDirection: 'row'
  },
  button: {
    backgroundColor: 'lightgreen',
    marginVertical: Spacing.small / 2,
    marginLeft: -Spacing.small,
    marginRight: Spacing.small,
    justifyContent: 'center',
    padding: Spacing.medium
  }
})
