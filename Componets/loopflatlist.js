import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable, TextInput, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const Loopflatlist = () => {

    const users = [
        {
            id: 1,
            name: 'abhishek',
            email: 'abhsiek@gmail.com',

        },
        {
            id: 2,
            name: 'shreya',
            email: 'shryea@gmail.com',

        },
        {
            id: 3,
            name: 'nitya',
            email: 'nitya@gmail.com',

        },
        {
            id: 4,
            name: 'sam',
            email: 'same@gmail.com',

        },
    ]

    return (
        <SafeAreaView>
            <Text style={{ fontSize: 29, backgroundColor: 'lightblue' }}> Componet in loop with Flatlist</Text>

            <FlatList
                data={users}
                renderItem={({ item }) => <UserData item={item} />}
            >

            </FlatList>
        </SafeAreaView>

    )
}

const UserData = (props) => {
    const item = props.item
    return (
        <View style={styles.box}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        fontSize: 20,
        color: 'orange',
        flex: 1,
        margin: 2,
        textAlign: 'center',


    },
    box: {
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: 'orange',
        marginBottom: 10,

    },
})
export default Loopflatlist