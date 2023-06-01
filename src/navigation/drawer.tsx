import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feed from 'screens/Feed';
import Article from 'screens/Article';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <>
      <Drawer.Navigator id="homeDrawer" initialRouteName="Feed">
        <Drawer.Screen
          name="Feed"
          component={Feed}
          options={{drawerLabel: 'Home'}}
        />
        <Drawer.Screen
          name="Article"
          component={Article}
          options={{drawerLabel: 'Article'}}
        />
      </Drawer.Navigator>
    </>
  );
};

export default MyDrawer;
