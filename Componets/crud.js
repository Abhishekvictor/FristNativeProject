import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const App2 = ()=>{
    const [data,setData] = useState([])
    const getApi = async ()=>{
        const url = 'http://10.18.202.205:3000/users'
        let result = await fetch(url)
        result = await result.json()
        if(result){
            setData(result)
        }
    }

    useEffect(()=>{
        getApi();
    },[])
    
    return(
        <View>  
            {data.length
            ?
            data.map((item)=>{
                return(

                    <View>
                    <Text>{item.name}</Text>
                </View>
                )
            })
            :null}

        </View>
    )
}
export default App2