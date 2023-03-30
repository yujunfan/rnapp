import React, {useCallback, useState} from 'react';
import Realm from 'realm';
import {useApp} from '@realm/react';
import {StyleSheet, Text, View, Alert, Button} from 'react-native';

export function WelcomeView(): React.ReactElement {
  const app = useApp();

  // onPressSignIn() uses the emailPassword authentication provider to log in
  const onPressSignIn = useCallback(async () => {
    const credentials = Realm.Credentials.apiKey(
      '11dfc9bc-debc-47aa-a5bb-7d7095c99c48',
    );
    try {
      const user = await app.logIn(credentials);
      console.log('Successfully logged in!', user.id);
      return user;
    } catch (error: any) {
      Alert.alert(`Failed to sign in: ${error?.message}`);
    }
  }, [app]);

  return (
    <View style={styles.viewWrapper}>
      <Text style={styles.title}>My Sync 3312App</Text>
      <Button title="Log In" onPress={onPressSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
    padding: 10,
    color: 'gray',
    textAlign: 'center',
  },
  mainButton: {
    width: 350,
    backgroundColor: 'red',
  },
  secondaryButton: {
    color: 'red',
  },
});
