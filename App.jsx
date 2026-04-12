import { View, Text, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import App2 from './Componets/statusbar.js'



const App = () => {

   return (
      <SafeAreaView style={{flex:1,  backgroundColor:'red'}}>
      {/* <StatusBar
      backgroundColor='red'
      barStyle={'light-content'}
      // translucent={true}
      /> */}
         <View style={{flex:1, backgroundColor:'yellow'}}>
            <Text>abhishek victor</Text>
         </View>
      
      </SafeAreaView>
   )
};

export default App

