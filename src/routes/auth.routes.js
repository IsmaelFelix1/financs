import React from 'react';
import { View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SingIn from '../components/login/SingIn';
import SingUp from '../components/register/SingUp';

//navegação de login para registro
const Stack = createStackNavigator();

export default function AuthRoutes() {
 return (
   <Stack.Navigator>
       <Stack.Screen name="SingIn" component={SingIn} options={{headerShown: false}}/>
       <Stack.Screen name="SingUp" component={SingUp} options={{
         headerStyle: {
          backgroundColor: "rgb(35,66,20)",
          borderWidth: 1,
          borderBottomColor: '#FFF'
         },
         headerTintColor: '#FFF',
         headerBackTitleVisible: false,
         headerTitle: 'Voltar'
       }}/>
   </Stack.Navigator>
  );
}