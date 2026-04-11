import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable, TextInput } from 'react-native'
import React from 'react';
const App2 = () => {
    return (
        <View style={styles.main}>
            <View style={styles.box1}>
                <View style={styles.innerbox}></View>
                <View style={styles.innerbox}></View>
                <View style={styles.innerbox}></View>
            </View>
            <View style={styles.box2}></View>
            <View style={styles.box3}></View>
        </View>
    )
}

const styles = StyleSheet.create({

    main:{
        flex:1
    },
    box1: {
        flex: 1,
        backgroundColor: 'blue',
        flexDirection:'row'

    },
     box2: {
        flex: 1,
        backgroundColor: 'red'

    },
     box3: {
        flex: 1,
        backgroundColor: 'green'

    },
    innerbox:{
         flex: 1,
        backgroundColor:'pink',
        margin:10
        
    }


})

export default App2;