import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const name = 'khushi';
let age = 70
function fruit(){
  return 'apple'
}

const App = () => {
  return (
    <SafeAreaView>

      <Text style={{ fontSize: 30 }}>Components {name}</Text>
      <Text style={{ fontSize: 30 }}>HI My age is {age}</Text>
      <Text style={{ fontSize: 30 }}>{fruit()}</Text>
      <Text stytl={{fontSize:25}}> {age >= 30 ? 'Perfact age': "under age"}</Text>
      <Button title='press me '></Button>
    </SafeAreaView>
  )
}


export default App

