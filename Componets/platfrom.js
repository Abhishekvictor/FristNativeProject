import { Text, View, StyleSheet, Platform } from 'react-native'

const App2 = () => {
    return(
        <View>
        <Text>Name of the OS {Platform.OS}</Text>
        {
            Platform.OS=='android'?
            <Text>this is android</Text>:null
        }
        <Text>{JSON.stringify(Platform)}</Text>        

        </View>
    )
}

export default App2