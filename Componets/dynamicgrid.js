import { Text, View, StyleSheet, ScrollView } from "react-native";

export const Grid = () => {

    //    user list 
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
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
        {
            id: 5,
            userName: 'anuj'
        },
    ]
    return (
             <ScrollView>
        <View >
            <Text>Explain of Dynamic Grid</Text>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>


                    {/* text box with colume with grid view */}
                    {
                        users.map((item) => <Text style={styles.item}>{item.userName}</Text>)
                    }
            </View>
        </View>
                </ScrollView>
    )
}

export const styles = StyleSheet.create({
    item: {
        fontSize: 25,
        backgroundColor: 'blue',
        color: '#fff',
        padding: 5,
        margin: 2,
        width: 120,
        height: 120,
        textAlignVertical: 'center',
        textAlign: 'center'


    }
})