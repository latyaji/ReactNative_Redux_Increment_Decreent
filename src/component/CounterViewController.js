import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CounterViewController({setCounterValue}) {
   
    const Increment = () => {
    //    setCounterValue(tempValue => console.log(tempValue)) // isse purani wali value mil rhi hai
         setCounterValue(tempValue => {
            return tempValue + 1
         })


    }

    const Decrement = () => {
        setCounterValue(OldValue => {
            return OldValue - 1
        })
    }

  return (
    <View style={styles.conatiner}>
        <TouchableOpacity 
          style={styles.touchbtn}
          onPress={() => Decrement()}
         >
        <Text style={styles.textstyles}>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.touchbtn}
         onPress={() => Increment()}
          >
        <Text style={styles.textstyles}>Increment</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"70%",
        alignItems:"center",
        
    },
    textstyles:{
        fontSize:20,
        color:"#fff"  
    },
    touchbtn:{
        backgroundColor:"blue",
        padding:15
    }
})