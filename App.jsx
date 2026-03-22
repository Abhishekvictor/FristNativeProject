import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Grid} from './Componets/dynamicgrid.js'


const App = () => {

   return (
      <SafeAreaView>
         <Grid/>

      </SafeAreaView>
   )
};

export default App

