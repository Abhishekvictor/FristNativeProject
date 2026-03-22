import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Flastlist from './Componets/flatlist.js'
import MapList from './Componets/mapLIst.js'


const App = () => {

   return (
      <SafeAreaView>
         <MapList/>

      </SafeAreaView>
   )
};

export default App

