import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

const App2 = () => {
    const [data, setData] = useState([])
    const getApi = async () => {
        const url = 'http://10.18.202.205:3000/users'
        let result = await fetch(url)
        result = await result.json()
        if (result) {
            setData(result)
        }
    }

    useEffect(() => {
        getApi();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.dataWapper}>

            <View style={{flex:1}} ><Text>Name</Text></View>
            <View style={{flex:1}} ><Text>age</Text></View>
            <View style={{flex:1}} ><Text>Operation</Text></View>
            
            </View>

            {data.length
                ?
                data.map((item) => {
                    return (

                        <View style={styles.dataWapper}>
                            <View style={{ flex: 1, backgroundColor: 'red' }}> <Text>{item.name}</Text></View>
                            <View style={{ flex: 1, backgroundColor: 'green' }}> <Text>{item.age}</Text></View>
                            <View style={{ flex: 1 }}>  <Button title="Delete" color={"black"}></Button></View>
                            <View style={{ flex: 1 }}>  <Button title="Update" color={"purple"}></Button></View>
                        </View>
                    )
                })
                : null}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dataWapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'orange',
        margin: 2,
        padding: 10,

    }
})
export default App2