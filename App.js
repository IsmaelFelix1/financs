import React from 'react';
import { View, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/routes';
export default function App() {
 return (
   <NavigationContainer>
     <StatusBar backgroundColor='#121212' barStyle='ligh-content'/>
     <Routes />
   </NavigationContainer>
  );
}