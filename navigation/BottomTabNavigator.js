import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import DiscoverScreen from '../features/discover/DiscoverScreen.js';
import BookListScreen from '../features/booklist/BooklistScreen';
import ProfileScreen from '../features/profile/ProfileScreen'

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Book List';

export default function BottomTabNavigator ({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          title: 'Discover',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="search" />,
        }}
      />
      <BottomTab.Screen
        name="Book List"
        component={BookListScreen}
        options={{
          title: 'Book List',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="list" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user-circle" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle (route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
