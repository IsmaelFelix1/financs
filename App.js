import React from 'react';
import { View, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/routes';
import AuthProvider from './src/contexts/auth';
export default function App() {
 return (
   <NavigationContainer>
     <AuthProvider>
      <StatusBar backgroundColor='#121212' barStyle='ligh-content'/>
      <Routes />
     </AuthProvider>
   </NavigationContainer>
  );
}