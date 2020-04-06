import * as React from 'react'
import { Text, StyleSheet } from 'react-native'
import * as R from 'ramda'

const combineObjects = (...args) => R.reduce((acc, obj) => ({ ...acc, ...obj }), {}, args)

const Header = (props) => <Text {...props} style={combineObjects(styles.header, props.style)} >{props.children}</Text>

export const H1 = (props) => <Header {...props} style={combineObjects(styles.h1, props.style)} >{props.children}</Header>
export const H2 = (props) => <Header {...props} style={combineObjects(styles.h2, props.style)} >{props.children}</Header>
export const H3 = (props) => <Header {...props} style={combineObjects(styles.h3, props.style)} >{props.children}</Header>
export const H4 = (props) => <Header {...props} style={combineObjects(styles.h4, props.style)} >{props.children}</Header>
export const H5 = (props) => <Header {...props} style={combineObjects(styles.h5, props.style)} >{props.children}</Header>
export const H6 = (props) => <Header {...props} style={combineObjects(styles.h6, props.style)} >{props.children}</Header>

const styles = StyleSheet.create({
  header: {
    margin: 0,
    padding: 0,
  },
  h1: {
    fontSize: 32
  },
  h2: {
    fontSize: 24
  },
  h3: {
    fontSize: 19
  },
  h4: {
    fontSize: 16
  },
  h5: {
    fontSize: 13
  },
  h6: {
    fontSize: 11
  }
})