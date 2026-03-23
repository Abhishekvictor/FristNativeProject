import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SectionListex from './Componets/sectionLIst.js'


const App = () => {

   return (
      <SafeAreaView>
        <SectionListex />

      </SafeAreaView>
   )
};

export default App

