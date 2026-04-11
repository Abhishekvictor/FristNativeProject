import { Text, View, StyleSheet } from 'react-native'
const StyleApp = () => {
    return (

        <View>
            <Text  style ={{fontSize:30}}>Hadding for Text</Text>
            <Text style ={Style.textbox}>style 1 for Text</Text>
            <Text>sttyl 2 for Text</Text>
        </View>


    )
}

const Style = StyleSheet.create({
    textbox:{
        fontSize:30,
        color: "#dfbebe",
        backgroundColor: 'grey',
        padding:10,
        margin:15,
        borderRadius:10,
        borderWidth:2,

    }
})

export default StyleApp