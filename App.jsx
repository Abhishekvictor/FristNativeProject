import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable,TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colloge from './Componets/componetData.js'
import Btn from './Componets/button.js'
import PropsUser from './Componets/Props.js'
import StyleApp from './Componets/styling.js'


const App = () => {
  const [name, setName] = useState("");

  return (
    <SafeAreaView>
      <Text style={{fontSize:20,color:"grey"}}> Enter Your Name: {name} </Text>
    <TextInput placeholder='Enter the name' style={{borderColor:'blue', color:'Green', borderWidth:2, borderRadius:10,}}
    onChangeText={(Text) =>setName(Text)}
    value={name}
    />
    <Button
    title='clear Input Value' onPress={()=>setName('')}
    />
      
    
    </SafeAreaView>
  )
}


export default App

