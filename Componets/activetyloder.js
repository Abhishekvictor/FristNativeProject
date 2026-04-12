import { ActivityIndicator, Button, StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react';
const App2 = () => {
    const [show, setShow] = useState(false);
    const displayloder = () => {
        setShow(true);

    setTimeout(() => {
        setShow(false)
    }, 2000)
}





return (
    <View style={styles.main}>
        {/* <ActivityIndicator size={100} color='black' animating={true} ></ActivityIndicator> */}
        {
            show ? <ActivityIndicator size={100} color='black' animating={true} ></ActivityIndicator> : null
        }
        <Button title='show Loder' onPress={displayloder}></Button>

    </View>
)
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})

export default App2;