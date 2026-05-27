import React from "react";
import {View,Text, StyleSheet, Button, Image} from 'react-native'
const Product = (props)=>{
    const item = props.item
    return(
        <View>
            <Text>{item.name}</Text>
            <Text>{item.cost}</Text>
            <Image style={{width:100, height:100}} source={{uri:item.image}}></Image>
            <Button title="Add to cart"></Button>
         </View>
    )
}


export default Product;