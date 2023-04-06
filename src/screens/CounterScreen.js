import { View, Text ,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import CounterView from '../component/CounterView'
import CounterViewController from '../component/CounterViewController'

export default function CounterScreen() {
    const[counter,setCounter] = useState(0)
  return (
    <View style={styles.container}>
      <CounterView  counterValue = {counter}/>
      <CounterViewController setCounterValue = {setCounter}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }
  })