// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from './Components/ThemeContext'; 
import ProfileUpdate from './Components/ProfileUpdate';
import Donation from './Components/Donation';
import RegisterScreen from './Components/RegisterScreen';
import LoginScreen from './Components/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="ProfileUpdate" component={ProfileUpdate} options={{ title: 'Profile Update' }} />
          <Stack.Screen name="Donation" component={Donation} options={{ title: 'Donation' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
