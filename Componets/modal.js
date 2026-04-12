import React, { useState } from "react";
import { View, Button, Modal, Text, StyleSheet } from "react-native";


const App2 = () => {

    const [setshow, setmodalshow] = useState(false)

    const showbtn =()=>{
        return(

            setmodalshow(true)
        )
    
    }
        const close =()=>{
        return(

            setmodalshow(false)
        )
    
    }

    return (
        <View style={styles.main}>
            <Modal visible={setshow} transparent={true}
            animationType="fade">
                <View style={styles.centerview}>
                    <Text>this is Modal example</Text>
                    <Button title="close Modal"onPress={close}></Button>
                </View>
            </Modal>

            <View style={styles.btnopen}><Button title="Open Modal" onPress={showbtn}></Button></View>
        </View>

    )


}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    btnopen: {
        flex: 1,
        justifyContent: "flex-end"

    },
    centerview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
})


export default App2;