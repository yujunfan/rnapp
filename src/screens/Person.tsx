import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import type {CompositeNavigationProp} from '@react-navigation/native';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type {StackNavigationProp} from '@react-navigation/stack';

type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'Profile'>,
  StackNavigationProp<RootStackParamList>
>;
const Person = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <View>
      <Text>this is Person</Text>
      <Button onPress={() => navigation.navigate('RealmCURD')}>
        back home
      </Button>
    </View>
  );
};
export default Person;
