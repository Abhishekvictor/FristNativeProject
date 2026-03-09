import React, { useState } from "react";
import { View, Text, Button} from "react-native";
// import { Button } from "react-native/types_generated/index";

const PropsUser =()=>{

    const[user, setName]=useState("Abhsiehk")

    return(
        <View>
        {/* <Text style={{fontSize: 30}}>Props in react native</Text> */}
            <Button title="ON press" onPress={()=> setName('shreya')}/>
                <User user={user}/>
        </View>


    )
};

const User=(props)=>{
    return(

        <View>
    <Text style={{ fontSize :30}} > Name:{props.user}</Text>


</View>

)
}

export default PropsUser;