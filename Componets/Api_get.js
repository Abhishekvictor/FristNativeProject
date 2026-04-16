import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
const App2 = () => {

    const [data, setdata] = useState(undefined)

    const getAipDAta = async () => {
        const url = 'https://jsonplaceholder.typicode.com/todos/1'
        let result = await fetch(url)
        result = await result.json()
        setdata(result)

    }

    useEffect(() => {
        getAipDAta();
    }, [])



    return (
        <View>

            <View><Text> API Call</Text></View>
            {
                data ?<View>
                        <Text>{data.id}</Text>
                    </View> : null
            }
        </View>
    )
}

export default App2;