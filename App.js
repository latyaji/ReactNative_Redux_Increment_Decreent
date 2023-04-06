// import { View,StyleSheet } from 'react-native'
// import React from 'react'
// import CounterScreen from './src/screens/CounterScreen'
// import CounterCustomset from './src/component/CounterCustomset'
// import { useState } from 'react'
// export default function App() {
//   const [customValueparent,setCustomValueparent] = useState("1")
//   return (
//    <View style={styles.container }>
//     <CounterScreen />
//     <CounterCustomset setCustomValueparent={setCustomValueparent}/>
//    </View>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
   
//   }
// })



// App.js
import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import { store } from './store';
 
export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}