import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const App = () => {
  return (
    <SafeAreaView>

      <Text style={{ fontSize: 30 }}>Components </Text>
      <UserDate/>
      <UserDate/>
      <Colloge/>


    </SafeAreaView>
  );
};

const UserDate = ()=>{
  return(
    <View>
      <Text style={{ fontSize: 20 }}>Name: Anil </Text>
      <Text style={{ fontSize: 20 }}>age : 29 </Text>
      <Text style={{ fontSize: 20 }}>email: Anil@gmail.com </Text>
      
    </View>


  )
}
const Colloge = ()=>{
  return(
    <View>
      <Text style={{ fontSize: 20 }}>Name: TATA </Text>
      <Text style={{ fontSize: 20 }}>emp : 29 </Text>
      <Text style={{ fontSize: 20 }}>Producte: abs </Text>
    </View>


  )
}


export default App

