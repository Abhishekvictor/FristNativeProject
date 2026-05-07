import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react';

const App2 = () => {
    
    const [data,setdata] = useState([])
    const searchBar = async (text)=>{
        const url = `http://10.18.202.205:3000/users?q=${text}`
        let result = await fetch(url);
        result = await result.json();
        if(result){
            setdata(result)
        }

        
    }
    
    return (
        <View>
            <Text>this Search Bar</Text>

            <TextInput style={{
                borderWidth:2,
                borderColor:'black'
            }}
            onChangeText={(text)=>searchBar (text)}
            ></TextInput>

            {
                data.length?
                data.map((item)=><View key={item.id}>
                    <Text>{String(item.name)}</Text>
                </View>

                ):null
            }
        </View >
    )
}

export default App2;