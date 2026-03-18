import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colloge from './Componets/componetData.js'
import Btn from './Componets/button.js'
import PropsUser from './Componets/Props.js'
import StyleApp from './Componets/styling.js'
import Formpage from './Componets/login.js'


const App = () => {
  return (
    <SafeAreaView>
      
      {/* From page componet */}
      <Formpage />
    </SafeAreaView>
  )
}

export default App

