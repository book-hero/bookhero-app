import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ListTile, ListTileWithButton } from './ListTile'
import { H2, H3 } from '../ui/typography'
import { Spacing } from '../ui'
import FAIcon from './FAIcon'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Cover () {
  return (
    <View style={styles.cover}>

    </View>
  )
}

function BookTileContents ({ author, title }) {
  return (
    <View style={styles.contents}>
      <Cover></Cover>
      <View style={styles.info}>
        <H3>{title}</H3>
        <Text>{author}</Text>
      </View>
    </View>
  )
}

export function BookTile ({ author, title }) {
  return (
    <ListTile>
      <BookTileContents author={author} title={title} />
      <TouchableOpacity style={styles.options} activeOpacity={0.3}>
        <FAIcon icon="ellipsis-v"></FAIcon>
      </TouchableOpacity>
    </ListTile>
  )
}

export function BookTileWithButton (props) {
  return (
    <ListTileWithButton>
      <BookTileContents author={props.author} title={props.title} />
    </ListTileWithButton>
  )
}


const styles = StyleSheet.create({
  contents: {
    flexDirection: 'row',
    flex: 1
  },
  cover: {
    width: 50,
    height: '100%',
    borderColor: 'black',
    borderWidth: 1
  },
  info: {
    flex: 1,
    paddingLeft: Spacing.small,
  },
  options: {
    height: '100%',
    justifyContent: 'center',
  }
})