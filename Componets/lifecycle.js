import React,{useEffect, useState} from 'react';
import { Alert, Button,Text, TextInput, View } from 'react-native';

const App2 =() =>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('hello')
    },[])

    return(
       <View>
       <Text style ={{fontSize:30}}> life cycle with useeffect{count}
       </Text>
       <Button title='Update Button' onPress={()=>setCount(count+1)} />
       
       </View>
        
    )
}

export default App2 ;