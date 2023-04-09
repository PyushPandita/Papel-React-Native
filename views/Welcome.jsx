import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = () => {
return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Welcome;
