import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Student from './Componets/classcomp.js'


const App = () => {

   return (
      <SafeAreaView>
        <Student/>

      </SafeAreaView>
   )
};

export default App

