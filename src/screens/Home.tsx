import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {StackScreenProps} from '@react-navigation/stack';
import type {DrawerScreenProps} from '@react-navigation/drawer';
import MyDrawer from 'src/navigation/drawer';
type ProfileScreenProps = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, 'Profile'>,
  CompositeScreenProps<
    StackScreenProps<RootStackParamList>,
    DrawerScreenProps<DrawerParamList>
  >
>;
const Home = () => {
  const navigation = useNavigation<ProfileScreenProps>();
  return <MyDrawer />;
};
export default Home;
