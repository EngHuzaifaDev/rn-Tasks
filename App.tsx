import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RootScreen from './src/RootScreen';
import {NavigationContainer} from '@react-navigation/native';
// import { SafeAreaView } from 'react-native';
// Define the functional component with React.FC
const App: React.FC = () => {
  // useColorScheme returns "light" or "dark"
  const isDarkMode: boolean = useColorScheme() === 'light';

  // Define a style object for the background color
  const backgroundStyle: {backgroundColor: string} = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={[backgroundStyle, {width: '100%', height: '100%'}]}>
        <PaperProvider>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <RootScreen />
        </PaperProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;