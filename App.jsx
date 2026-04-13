import { View, Text, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import App2 from './Componets/stacknavigation.js'
import {WebView} from 'react-native-webview'


const App = () => {

   return (
      <View style={{ flex: 1 }}>
      <App2></App2>
      </View>
   )
};

export default App

