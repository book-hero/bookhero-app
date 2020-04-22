import * as React from 'react'
import * as R from 'ramda'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Spacing } from '../ui'
import FAIcon from '../components/FAIcon'

export function ResultList ({ results, emptyText, displayResult }) {
  return (
    <View style={{ flex: 1 }}>
      {results.length === 0 ? (
        <EmptyResultList text={emptyText}></EmptyResultList>
      ) : (
        <ScrollView>{R.map(displayResult, results)}</ScrollView>
      )}
    </View>
  )
}

function EmptyResultList ({ text }) {
  return (
    <View style={styles.empty}>
      <FAIcon icon='books' color={styles.emptyContent.color} size={50}></FAIcon>
      <Text style={styles.emptyContent}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -Spacing.large
  },
  emptyContent: {
    color: '#aaa',
    fontSize: 20,
    margin: Spacing.medium,
    textAlign: 'center'
  }
})
