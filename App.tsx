import React, {useContext} from 'react';
import {ThemeProvider} from 'shared/theme';
import {View} from 'react-native';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation';
import {StoreContext, store} from 'src/stores';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {observer} from 'mobx-react-lite';
const App = () => {
  const insets = useSafeAreaInsets();
  const {modeStore} = useContext(StoreContext);
  return (
    <ThemeProvider mode={modeStore.mode}>
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          flex: 1,
        }}>
        <Navigation />
      </View>
    </ThemeProvider>
  );
};

const APPObserver = observer(App);

const AppProvider = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#333" translucent />
      <StoreContext.Provider value={store}>
        <APPObserver />
      </StoreContext.Provider>
    </SafeAreaProvider>
  );
};

export default AppProvider;
