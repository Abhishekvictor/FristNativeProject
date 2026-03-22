import { Text, View, StyleSheet, ScrollView } from "react-native";
import { create } from "react-native/types_generated/Libraries/ReactNative/ReactFabricPublicInstance/ReactNativeAttributePayload";

const MapList = () => {

    const users = [
        {
            id: 1,
            userName: 'abhishek'
        },
        {
            id: 2,
            userName: 'shreya'
        },
        {
            id: 3,
            userName: 'neha'
        },
        {
            id: 4,
            userName: 'nitya'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 6,
            userName: 'anuj'
        },
        {
            id: 7,
            userName: 'sunil'
        },
        {
            id: 8,
            userName: 'anil'
        },
        {
            id: 9,
            userName: 'amin'
        },
        {
            id: 10,
            userName: 'amr'
        },

        {
            id: 5,
            userName: 'divya'
        },

        {
            id: 5,
            userName: 'tno'
        },

        {
            id: 5,
            userName: 'monu'
        },




    ]
    return (
        <View>

            <Text> list with map function</Text>
            <ScrollView style={{marginBottom:10}}>
                {
                    users.map((item) => <Text style={styles.listuser}>{item.userName}</Text>)
                }
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    listuser: {
        fontSize: 20,
        padding: 20,
        color: '#ffff',
        backgroundColor: 'blue',
        borderColor: 'black',
        borderWidth: 1,
        margin: 5,

    }

})

export default MapList