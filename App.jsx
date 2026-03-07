import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colloge from './Componets/componetData.js'
const App = () => {
  return (
    <SafeAreaView>

     <Colloge/>
      <Text style={{ fontSize: 30 }}>Components </Text>
      <UserDate/>
      <UserDate/>
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


export default App

