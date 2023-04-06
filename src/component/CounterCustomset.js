import { View, Text,StyleSheet, TextInput } from 'react-native'
import React,{useState} from 'react'

export default function CounterCustomset({setCustomValueparent}) {
    const [firstValue,setFirstValue] = useState("1")
    const applyInchangesstate = (text) => {
        setCustomValueparent(text)

    }
  return ( 
    <View style={styles.container}>
      <TextInput 
       defaultValue={firstValue}
       style={styles.textinput} 
        onChangeText={(text) => applyInchangesstate(text) }
        ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center"
     
    },
    textinput:{
        borderWidth:1,
        width:"70%"

    }
  })