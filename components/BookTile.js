import * as React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { ListTile, ListTileWithButton } from './ListTile'
import { H2, H3 } from '../ui/typography'
import { Spacing, Colors } from '../ui'
import FAIcon from './FAIcon'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Menu } from 'react-native-paper'

function Cover () {
  return <View style={styles.cover}></View>
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
  const [menuOpen, toggleMenu] = React.useState(false)

  const EllipsisButton = (
    <TouchableOpacity
      style={styles.options}
      activeOpacity={0.3}
      onPress={() => toggleMenu(true)}
    >
      <FAIcon icon='ellipsis-v'></FAIcon>
    </TouchableOpacity>
  )

  return (
    <ListTile>
      <BookTileContents author={author} title={title} />
      <Menu
        visible={menuOpen}
        onDismiss={() => toggleMenu(false)}
        anchor={EllipsisButton}
      >
        <Menu.Item onPress={() => toggleMenu(false)} title='Stop Reading' />
        <Menu.Item onPress={() => toggleMenu(false)} title='Start Reading' />
        <Menu.Item onPress={() => toggleMenu(false)} title='Remove From List' />
      </Menu>
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
    paddingLeft: Spacing.small
  },
  options: {
    // height: '100%',
    justifyContent: 'flex-start'
    // padding: 5
  }
})
