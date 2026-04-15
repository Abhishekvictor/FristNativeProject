
import { useState } from 'react';
import { View, Text, StatusBar, Button, Alert, TextInput } from 'react-native'
const Home = (props) => {
const [Name,setName] = useState('');
const age = 24;
   
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> This is Home Screen </Text>
            <TextInput placeholder='Enter the name' onChangeText={(text)=>setName(text)}/>
            <Button title='go to home page' onPress={() => props.navigation.navigate('Login', {Name, age})}></Button>
            
        </View>
    )
}

export default Home
