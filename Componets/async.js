import { View, Text, Button, StyleSheet, TextInput, Alert, ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from "react";
const App2 = ()=>{

    const [user,setuser] = useState('')
   const setdata = async ()=>{
        await AsyncStorage.setItem('user',"abhisek")
    }

    const getdata = async ()=>{
        const name = await AsyncStorage.getItem('user');
        setuser(name)

    }

    const resetdata = async ()=>{
        await AsyncStorage.removeItem('user')
        setuser('')
        console.log(user)

    }

    return(
        <View>
            <Text>Async Stroge with React native | {user} </Text>
            <Button title="set data" onPress={setdata}></Button>
            <Button title="get data" onPress={getdata}></Button>
            <Button title="Reset Data" onPress={resetdata}></Button>

        </View>
    )
}

export default App2