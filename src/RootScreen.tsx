import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from './screens/namesAndComps.js'; // Assuming `names` and `screens` are exported
import {View} from 'react-native';

// Define the types for the navigation stack
type RootStackParamList = {
  [key: string]: undefined; // Each route doesn't expect params; adjust if they do.
};

const RootScreen: React.FC = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Screens.names.Home}>
      {/* Map each screen dynamically */}
      {Object.keys(Screens.names).map(key => (
        <Stack.Screen
          key={key}
          name={Screens.names[key as keyof typeof Screens.names]}
          component={Screens.screens[key as keyof typeof Screens.screens]}
        />
      ))}
    </Stack.Navigator>
  );
};

export default RootScreen;