import { View, Text, Button } from "react-native";
import React from "react";


const App2 = () => {
    
    const saveApicall = async () =>{
        const data={
            name:'mohit junjuwala',
            age:78,
            email:'mohit@gmail.com'
        }
        const url = 'http://10.18.202.205:3000/users'
        let result = await fetch(url, {
            method:'post',
            headers:{'Content-Type':'application/json' },
            body:JSON.stringify(data)
        })
        result =  await result.json();

    }
    
    
    
    return (
            
        <View>
            <Text>Post Api call</Text>
            <Button title="Call the Api call" onPress={saveApicall}></Button>
            
        </View>

    )
}

export default App2;
