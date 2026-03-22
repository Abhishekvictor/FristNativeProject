import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Loopflatlist from './Componets/loopflatlist.js'


const App = () => {

   return (
      <SafeAreaView>
        <Loopflatlist></Loopflatlist>

      </SafeAreaView>
   )
};

export default App

