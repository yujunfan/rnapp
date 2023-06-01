import React from 'react';
import {ThemeProvider} from 'react-native-elements';
import {View} from 'react-native';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation';
import {StoreContext, store} from 'src/stores';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const App = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
      }}>
      <Navigation />
      {/* <MyDrawer /> */}
    </View>
  );
};

const AppProvider = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#333" translucent />
      <ThemeProvider>
        <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default AppProvider;
