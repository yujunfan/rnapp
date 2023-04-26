import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from 'screens/Home';
import Person from 'screens/Person';
import RealmCURD from 'screens/RealmCURD';
import {navigationRef} from './RootNavigation';
import {useFlipper} from '@react-navigation/devtools';
const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  //在Flipper中使用React Navigation devtools
  useFlipper(navigationRef);
  // useReduxDevToolsExtension(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Person"
          component={Person}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="RealmCURD"
          component={RealmCURD}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
