import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ScreenNames } from './ScreenNames';
import { Screens } from './Screens';

const Stack = createStackNavigator();

export default function AuthNavigator({navigation, route}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.MainScreen}
        component={Screens.MainScreen}
        options={{headerShown: false}}
        initialParams={route.params}
      />
    </Stack.Navigator>
  );
}
