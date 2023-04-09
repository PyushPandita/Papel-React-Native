import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation';
import Welcome from './views/Welcome';

export default function App() {

  const [isLoading, SetIsLoading] = useState()

  setTimeout(() => {
    SetIsLoading(true);
  }, 3000);

  return (
    <RecoilRoot>
      <NavigationContainer>
      {/* {isLoading ? <MyStack/> : <Welcome/>} */}
      <Welcome/>
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
  },
});
