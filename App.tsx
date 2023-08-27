/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Appearance,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme
} from 'react-native';

import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import RootNavigator from './src/system/navigation/RootNavigator';
import AppContextProvider from './src/system/AppContextProvider';
import { DarkTheme, LightTheme } from './src/helpers/Themes';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
    flex: 1,
  };

  const navigationRef = createNavigationContainerRef();

  const [myAppTheme, setMyAppTheme] = useState(LightTheme);

  const scheme = Appearance.getColorScheme();

  useEffect(() => {

    setMyAppTheme(scheme === 'dark' ? DarkTheme : LightTheme);

    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      // Updated Scheme Color
      setMyAppTheme(colorScheme === 'dark' ? DarkTheme : LightTheme);
    });

  }, [])

  useEffect(() => {
    console.log('Fahad Theme changes: ', myAppTheme);
  }, [myAppTheme]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
  

    <View style={{
      flex: 1,
    }}>
      <AppContextProvider>
      <NavigationContainer
      theme={scheme === 'dark' ? DarkTheme : LightTheme}
        ref={navigationRef}>
        <StatusBar
          backgroundColor={myAppTheme.colors.appStatusBarColor}
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <RootNavigator />


      </NavigationContainer>
      </AppContextProvider>
    </View>

    </SafeAreaView>
  );
}

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
