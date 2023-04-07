import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RecoilRoot } from 'recoil';
import Navbar from './views/Navbar';
import Screen1 from './views/Screen1'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RecoilRoot>
        <Navbar />
        <Screen1 />
      </RecoilRoot>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
  },
});
