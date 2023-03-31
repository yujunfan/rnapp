/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {realmContext} from './src/RealmContext';
import {AppProvider, UserProvider} from '@realm/react';
import {WelcomeView} from './src/WelcomeView';
import {ItemListView} from './src/ItemListView';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  StyleSheet,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const {RealmProvider} = realmContext;

const LoadingIndicator = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
};
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AppProvider id="myappa-erzsj" baseUrl="https://realm.mongodb.com">
      <UserProvider fallback={WelcomeView}>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <RealmProvider
              sync={{
                flexible: true,
                onError: (_, error) => {
                  // Show sync errors in the console
                  console.error(error);
                },
              }}
              fallback={LoadingIndicator}>
              <View>
                <ItemListView />
              </View>
            </RealmProvider>
          </ScrollView>
        </SafeAreaView>
      </UserProvider>
    </AppProvider>
  );
};
const styles = StyleSheet.create({
  footerText: {
    fontSize: 12,
    textAlign: 'center',
  },
  footer: {
    padding: 24,
  },
  activityContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default App;
