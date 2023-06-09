/*
 * @Author: yujunfan
 * @Date: 2023-04-03 11:38:02
 * @LastEditors: yujunfan
 * @LastEditTime: 2023-06-01 19:45:34
 * @Description: realm 本地数据增删改查例子
 */
import React, {useEffect, useState, useRef} from 'react';
import {View,  useWindowDimensions, ScrollView} from 'react-native';
import {Button} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import type {CompositeNavigationProp} from '@react-navigation/native';
import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type {StackNavigationProp} from '@react-navigation/stack';
import {RealmService} from 'src/realm/service';
import {PersonType} from 'src/realm/service';
import {BSON} from 'realm';
import {Box, Text} from 'components';
type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<RootTabParamList, 'Profile'>,
  StackNavigationProp<RootStackParamList>
>;
const RealmCURD = () => {
  const realm = useRef(RealmService.getInstance());
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [data, setData] = useState<Realm.Results<PersonType>>();
  const {height} = useWindowDimensions();
  useEffect(() => {
    realm.current && setData(realm.current.queryAll() ?? []);
  }, [realm]);

  const handleWrite = () => {
    const person: PersonType = {
      _id: new BSON.ObjectId(),
      name: 'name' + new Date().getTime(),
      age: '16',
    };
    realm.current.insert(person);
  };

  const handlSearch = () => {
    const allData = realm.current.queryAll();
    setData(allData ?? []);
  };

  const handlDel = (person: PersonType) => {
    realm.current.delete(person);
    handlSearch();
  };

  const handlUpdate = (person: PersonType) => {
    const newPerson: PersonType = {
      _id: new BSON.ObjectId(),
      name: '66666' + new Date().getTime(),
      age: '16',
    };
    realm.current.update(person, newPerson);
    handlSearch();
  };

  return (
    <ScrollView contentContainerStyle={{minHeight: height}}>
      <Box padding="m" backgroundColor="background" flex={1}>
        <Text>this is Person</Text>
        <Button onPress={() => navigation.navigate('Home')}>back home</Button>
        <Button onPress={handleWrite}>插入数据</Button>

        <Button onPress={handlSearch}>获取数据</Button>

        {data?.map(d => (
          <View
            key={d?._id?.inspect() || Math.random().toString()}
            style={{width: 100}}>
            <Text>{d?.name}</Text>
            <Button onPress={() => handlDel(d)}>删除数据</Button>
            <Button onPress={() => handlUpdate(d)}>修改数据</Button>
          </View>
        ))}
      </Box>
    </ScrollView>
  );
};
export default RealmCURD;
