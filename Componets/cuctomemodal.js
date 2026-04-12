import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const App2 = () => {
    const [show, setshow] = useState(false)
    return (
        <View style={styles.conatiner} >
            {
                show ?

                    <View style={styles.modal}>
                        <View style={styles.dilogbox}>
                            <Text>This is Dilog Box</Text>
                            <Button title='Close' onPress={() => setshow(false)}></Button>
                        </View>
                    </View>
                    : null
            }

            <Button title='Open Dilog' onPress={()=>setshow(true)}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    dilogbox: {
        backgroundColor: 'rgba(181, 241, 238, 0.49)',
        height: 300,
        width: 250,
        justifyContent: 'flex-end',
        borderRadius: 20,
        padding: 10,

    },
    conatiner: {
        flex: 1,
        justifyContent:'flex-end'


    }
})
export default App2