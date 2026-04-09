import React,{Component} from 'react';
import { Alert, Button,Text, TextInput, View } from 'react-native';

class Student extends Component{
    fruit =()=>{
        console.warn("Apple");
    }
    render(){
        return(
            <View>
                <Text style={{fontSize:30,color:'red'}}> class Component</Text>
                <TextInput placeholder='enter your name'></TextInput>
                <Button title='Press Me' onPress={this.fruit}></Button>
            </View>
        )
    }
}

export default Student ;