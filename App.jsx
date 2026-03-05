import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'

const App = () => {
  return (
   
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


      </View>
    
 

  )
}


export default App

const styles = StyleSheet.create({
  container:{
    marginTop:50,
  },
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
  

})