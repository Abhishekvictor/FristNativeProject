import React,{useEffect, useState} from 'react';
import { Alert, Button,Text, TextInput, View } from 'react-native';

const App2 =() =>{
    const [show, setShow] = useState(true);
    
    return(
       <View>
       <Text style ={{fontSize:30}}>useEffect for Unmount componet 
       </Text>
       <Button title='comoment section' onPress={()=>setShow(!show)} />
        
        {
            show==true ? <Student></Student>:null
        }
       </View>
        
    )
}

const Student =()=>{
    let timer = setInterval(() => {
    Alert.alert('timer is runing')
}, 5000);
useEffect(()=>{
        return() => clearInterval(timer)
        
        
    })
    return(<View><Text style={{fontSize:30}}> user name</Text></View>)
}

export default App2 ;