import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import App2 from './Componets/styleflex.js'
import StyleApp from './Componets/styling.js'


const App = () => {

   return (
      <SafeAreaView style={{flex:1, backgroundColor:'black'}}>

         <App2></App2>
      </SafeAreaView>
   )
};

export default App

