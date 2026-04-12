import React from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";


const App2 = () => {
    return (
        <View style={styles.main}>
       <Pressable 
    //    onPress={()=>{Alert.alert('this is onPress')}}
        onLongPress={ ()=>{Alert.alert('this is onPress')}}
        delayLongPress={5000}
        // onPressIn={()=>{Alert.alert('this is onPress')}}
        // onPressOut={()=>{Alert.alert('this is onPress')}}
// 
        
        >
        <Text>Pressable</Text>
       </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default App2