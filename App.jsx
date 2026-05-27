import { View, Text, StatusBar, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Product from './redux/product.js'
import Header from './redux/header.js'
import {WebView} from 'react-native-webview'



const App = () => {

   const list = [
      {
         name:'samsung',
         cost:'3000',
         image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwyfHxwaG9uZXxlbnwwfHx8fDE3Nzk4NjEyMDZ8MA&ixlib=rb-4.1.0&fit=max&q=80'
      },
       {
         name:'MI',
         cost:'4000',
         image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwyfHxwaG9uZXxlbnwwfHx8fDE3Nzk4NjEyMDZ8MA&ixlib=rb-4.1.0&fit=max&q=80'
      },
       {
         name:'Apple',
         cost:'10000',
         image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=M3w4MjcwNjd8MHwxfHNlYXJjaHwyfHxwaG9uZXxlbnwwfHx8fDE3Nzk4NjEyMDZ8MA&ixlib=rb-4.1.0&fit=max&q=80'
      }
   ]

   return (
      <SafeAreaView style={{ flex: 1 }}>
      {
         list.map((item)=><Product item={item}/>)
      }
      <Header></Header>

      
      </SafeAreaView>
   )
};

export default App

