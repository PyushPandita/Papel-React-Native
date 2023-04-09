import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../views/Screen1';
import Screen2 from '../views/Screen2';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} options={{headerShown: false}} />
      <Stack.Screen name="Screen2" component={Screen2} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default MyStack;