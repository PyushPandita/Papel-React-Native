import { StyleSheet, Text, Image, View } from 'react-native'
import React from 'react'

const Welcome = () => {
return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: "https://img.icons8.com/fluency/512/wallpaper.png"}}/>
      <Text style={styles.textStyle}>Arigato 👋</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    width: 150, 
    height: 150,
  },

  textStyle: {
    marginTop: 20,
    fontSize: 30,
    // textTransform: 'uppercase',
    letterSpacing: 2,
  }

});

export default Welcome;
