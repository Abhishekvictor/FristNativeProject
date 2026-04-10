import React,{Component} from 'react';
import { Alert, Button,Text, TextInput, View } from 'react-native';

class Student extends Component{

    constructor(){
        super();
        this.state={
            
            name:'Abhihsek'
        }
    }

    updateName(body){
        this.setState({name:body})
    }
   
    render(){
        return(
            <View>
                <Text style={{fontSize:30,color:'red'}}>{this.state.name}</Text>
                <TextInput placeholder='enter your name' onChangeText={(text)=>this.updateName(text)}></TextInput>
                <Button title='Press Me' onPress={this.fruit}></Button>
            </View>
        )
    }
}

export default Student ;