import { View, Text, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
const App2 = () => {

    const [data, setdata] = useState([])

    const getAipDAta = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        let result = await fetch(url)
        result = await result.json()
        setdata(result)

    }

    useEffect(() => {
        getAipDAta();
    }, [])



    return (
        <ScrollView>

            <View><Text> API Call</Text></View>
            {
                data.length ?
                    data.map((item) => {
                        return (
                            <View key={item.id} style={{padding:10, borderBottomColor:'#ccc', borderBottomWidth:1}}>
                                <View><Text>{item.id}</Text></View>
                                <View><Text>{item.title}</Text></View>
                                <View><Text>{item.body}</Text></View>
                            </View>
                        )
                    })

                    : <Text>We did not get the data</Text>
            }
        </ScrollView>
    )
}

export default App2;