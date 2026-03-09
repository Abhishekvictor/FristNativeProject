import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colloge from './Componets/componetData.js'
import Btn from './Componets/button.js'
import PropsUser from './Componets/Props.js'


const App = () => {

  const [name, setName]= useState('Abhisek');

  function newUser (){
    setName('kushi')
  }
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}>{name} </Text>
      <PropsUser/>
      
    </SafeAreaView>
  );
};


export default App

