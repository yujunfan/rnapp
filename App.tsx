/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import Realm from 'realm';
import React, {type PropsWithChildren, useState} from 'react';
import {RealmContext} from './src/RealmContext';
import RealmPlugin from 'realm-flipper-plugin-device';
import {AppProvider, UserProvider} from '@realm/react';
import {useUser} from '@realm/react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {Book} from './src/ItemSchema';

const {RealmProvider, useRealm, useQuery} = RealmContext;

const CreateDogInput = () => {
  const [dogName, setDogName] = useState('Fido');
  const realm = useRealm();

  const handleAddDog = () => {
    realm.write(() => {
      // eslint-disable-next-line no-new
      new Book(realm, {name: 'book', price: 36});
    });
  };

  return (
    <View>
      {/* <RealmPlugin realms={[realm]} /> */}
      <Button onPress={() => handleAddDog()} title="Add Dog" />
    </View>
  );
};

const ReadData = () => {
  const user = useUser();
  const [dogName, setDogName] = useState('Fido');
  const realm = useQuery(Book);
  const realmA = new Realm({schema: [Book]});
  console.log(realm, 'realm');

  return (
    <View>
      <RealmPlugin realms={[realmA]} />
      <Button title="Add aaaaDog" />
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AppProvider
      id="637c80262ca0f76a05475775"
      baseUrl="https://realm.mongodb.com">
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <RealmProvider>
            <View>
              <CreateDogInput />
              <ReadData />
            </View>
          </RealmProvider>
        </ScrollView>
      </SafeAreaView>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
