import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feed from 'screens/Feed';
import Article from 'screens/Article';
const Drawer = createDrawerNavigator();

/**
 * Drawer.Screen 配置api
 * @description: https://reactnavigation.org/docs/drawer-navigator#options
 * @return {*}
 */
const MyDrawer = () => {
  return (
    <>
      <Drawer.Navigator id="homeDrawer" initialRouteName="Feed">
        <Drawer.Screen
          name="Feed"
          component={Feed}
          options={{drawerLabel: 'Home', headerShown: false}}
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
