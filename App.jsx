import { StyleSheet, Text, View,Image,Button, TouchableOpacity, Alert, TouchableHighlight, Pressable} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

 

const App = () => {
  return (
        <SafeAreaView>

    <View style={styles.container}>

      <View style={styles.boxcontainer}>

      <View style={styles.redbox}></View>
      <View style={styles.bluebox}></View>
      <View style={styles.greenbox}></View>
      
      </View>

      {/* text component */}
      <Text style={styles.myFristtext}>My name is abhisek</Text>
      <Text style={styles.nestedText}>
        TExt component can be<Text style={styles.boldText}>Nested</Text>
      </Text>
      {/* Image component */}
      <Image
      style={styles.myImage} 
      source={{uri : 'https://images.unsplash.com/photo-1772528205616-e65dc0994c7b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
      <Image
      source={require('./assets/img_1.png')}
      style={styles.myImage}
      />

{/* button component */}
    
    <TouchableHighlight style={{padding:10, backgroundColor:'green'}}
    onPress={(()=> Alert.alert('pressed!'))}
    >
      <Text>Button</Text>
    </TouchableHighlight>

    <Pressable style={{padding:10, backgroundColor:'yellow'}}  >
      <Text>Press me </Text>
    </Pressable>








      </View>

      </SafeAreaView>
    
 

  )
}


export default App

const styles = StyleSheet.create({
  // container:{
  //   marginTop:'50',
  //   marginLeft:'10',
  //   width:'100%',
  //   height:'100%',
  //   // backgroundColor:'black'
  // },
  boxcontainer:{
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    justifyContent:'space-around',
  },
  redbox:{
    width:50,
    height:50,
    backgroundColor: 'red'

  },
  bluebox:{
    width:50,
    height:50,
    backgroundColor: 'blue',
  },

  greenbox:{
    width:50,
    height:50,
    backgroundColor:'green'

  },
  myFristtext:{
    fontSize:30,
    // fontWeight:100,

  },

  nestedText:{
    fontSize:18,

  },
  boldText:{
    fontWeight:'bold'
  },
  
  myImage: {
    width: 400,
    height: 200,
    // borderRadius: 30,   // optional
    // resizeMode: 'cover' // optional: cover | contain | stretch
  },
  button1:{
    width:200,
    height:30,
  }

})