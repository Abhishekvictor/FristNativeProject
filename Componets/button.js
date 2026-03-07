import {Text, Button, View, Alert, } from 'react-native'

const testbtn = ()=>{
    
    Alert.alert('button is pressed')
}


const Btn = ()=>{
    return(

        <View>

<Button title='Button' onPress={testbtn} color={'red'}

></Button>
</View>


)
}

export default Btn 