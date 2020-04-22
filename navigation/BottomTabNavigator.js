import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'

import TabBarIcon from '../components/TabBarIcon'
import DiscoverScreen from '../screens/Discover'
import BookListScreen from '../screens/BookList'
import ProfileScreen from '../screens/Profile'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Discover'

export default function BottomTabNavigator ({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name='Discover'
        component={DiscoverScreen}
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='search' />
          )
        }}
      />
      <BottomTab.Screen
        name='Book List'
        component={BookListScreen}
        options={{
          title: 'Book List',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='list' />
          )
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name='user-circle' />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}

function getHeaderTitle (route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Discover':
      return 'Discover'
    case 'Profile':
      return 'Profile'
    case 'Book List':
      return 'My Book List'
  }
}
