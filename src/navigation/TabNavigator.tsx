import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'screens/Home';
import RealmCURD from 'screens/RealmCURD';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="RealmCURD" id="homeTab">
      <Tab.Screen
        name="HomeA"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: '首页',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-map-marker"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="RealmCURD"
        component={RealmCURD}
        options={{
          tabBarLabel: 'Realm',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="database-search"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="email"
        component={RealmCURD}
        options={{
          tabBarLabel: 'email',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="email-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="magnify"
        component={RealmCURD}
        options={{
          tabBarLabel: 'magnify',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="account"
        component={RealmCURD}
        options={{
          tabBarLabel: 'account',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
