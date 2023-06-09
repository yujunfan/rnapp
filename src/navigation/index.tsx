import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTabs from './TabNavigator';
import Person from 'screens/Person';
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
          component={MyTabs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Person"
          component={Person}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
