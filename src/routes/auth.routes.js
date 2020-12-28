import React from 'react';
import { View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../components/login/login';

//navegação de login para registro
const Stack = createStackNavigator();

export default function AuthRoutes() {
 return (
   <Stack.Navigator>
       <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
   </Stack.Navigator>
  );
}