import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function CounterView({counterValue}) {
  return (
    <View>
      <Text style={styles.txt}>{counterValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   
    txt:{
        fontSize:50,
        fontWeight:"bold"   
    }
})