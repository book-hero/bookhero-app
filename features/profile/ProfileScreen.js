import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Spacing, Colors, Buttons } from '../../ui'
import { H2 } from '../../ui/typography'
import { ScreenView } from '../../components/ScreenView'
import { ProgressBar } from '../../components/ProgressBar'
import FAIcon from '../../components/FAIcon'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as R from 'ramda'

const indexedMap = R.addIndex(R.map)

export default function ProfileScreen () {
  return (
    <ScreenView>
      <View style={styles.card}>
        <Identity></Identity>
        <Attributes></Attributes>
        <LineSpacer></LineSpacer>
        <View style={{ alignItems: 'flex-start' }}>
          <H2>Other Stuff</H2>
          <Button title="Finished Books"></Button>
        </View>
      </View>
    </ScreenView>
  )
}

function Identity () {
  return (
    <View style={styles.identity}>
      <Avatar></Avatar>
      <View style={styles.name}>
        <H2>Logan Waite</H2>
        <Text style={styles.title}>The Wise</Text>
      </View>
      <TouchableOpacity>
        <FAIcon icon="cog"></FAIcon>
      </TouchableOpacity>
    </View>
  )
}

function Avatar () {
  return (
    <View style={styles.avatar}>
      <FAIcon icon="user-circle" size={100} />
    </View>
  )
}

function Attributes () {
  const attributes = [
    {
      name: 'attribute 1',
      xp: 5,
      requiredForLevel: 15,
      currentLevel: 1
    },
    {
      name: 'attribute 2',
      xp: 5,
      requiredForLevel: 25,
      currentLevel: 2
    }, {
      name: 'attribute 3',
      xp: 35,
      requiredForLevel: 50,
      currentLevel: 4
    }, {
      name: 'attribute 4',
      xp: 13,
      requiredForLevel: 25,
      currentLevel: 2
    },
  ]
  return (
    <View style={styles.attributes}>
      <H2>Attributes</H2>
      {indexedMap(
        (attribute, index) => (
          <Attribute
            key={index}
            name={attribute.name}
            currentLevel={attribute.currentLevel}
            xp={attribute.xp}
            requiredForLevel={attribute.requiredForLevel} />),
        attributes)}
    </View>
  )
}

function Attribute (props) {
  return (
    <View style={styles.attribute}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>{props.name}</Text>
        <Text>Lvl {props.currentLevel}</Text>
      </View>
      <ProgressBar progress={props.xp / props.requiredForLevel * 100}></ProgressBar>
    </View>
  )
}

function LineSpacer () {
  return <View style={{ width: '100%', borderColor: '#ccc', borderWidth: 1, marginVertical: Spacing.large }}></View>
}


const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: Spacing.small,
    padding: Spacing.medium,
    backgroundColor: Colors.white
  },
  identity: {
    flexDirection: 'row',
    // alignItems: 'center'
  },
  name: {
    flex: 1,
    marginLeft: Spacing.medium,
    marginTop: Spacing.medium,
    flexShrink: 1
  },
  main: {
    fontSize: 24
  },
  title: {
    fontSize: 18
  },
  attributes: {
    // flex: 1,
    marginTop: Spacing.large
  },
  attribute: {
    // maxWidth: 200,
    marginVertical: Spacing.small
  }
})