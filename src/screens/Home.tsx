import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import type {CompositeNavigationProp} from '@react-navigation/native';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type {StackNavigationProp} from '@react-navigation/stack';
import {StoreContext} from 'stores/index';
import {observer} from 'mobx-react-lite';

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'Profile'>,
  StackNavigationProp<RootStackParamList>
>;
const Home = () => {
  const {counterStore} = useContext(StoreContext);
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <View>
      <Text>{counterStore.count}</Text>
      <Button onPress={() => counterStore.incrementCount()}>+</Button>
      <Button onPress={() => counterStore.decrementCount()}>-</Button>
      <Button onPress={() => navigation.navigate('Person')}>
        跳题阿斯顿发
      </Button>
    </View>
  );
};
export default observer(Home);
