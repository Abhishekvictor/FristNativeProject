import React,{useEffect, useState} from 'react';
import { Alert, Button,Text, TextInput, View } from 'react-native';

const App2 =() =>{
    const [show, setShow] = useState(false);
    
    return(
       <View>
       <Text style ={{fontSize:30}}> on button click the Name will Disappear 
       </Text>
       <Button title='comoment section' onPress={()=>setShow(!show)} />
        
        {
            show==true ? <User></User>:null
        }
       </View>
        
    )
}

const User =()=>{
    return(<View><Text style={{fontSize:30}}>user Name</Text></View>)
}

export default App2 ;