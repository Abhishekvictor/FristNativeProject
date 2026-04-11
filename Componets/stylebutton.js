import { Text, View, TouchableHighlight, StyleSheet } from "react-native";

const App2 =()=>{
    return(
        <View style={styles.main}>
            <TouchableHighlight>
                <Text style={[styles.button,styles.success]}>Success</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button,styles.primary]}>Suprimaryccess</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1

    },
    button:{
        backgroundColor:'green',
        color:'#ffff',
        fontSize:24,
        textAlign:'center',
        padding:10,
        margin:10,
        borderRadius:10,
        shadowColor:'red',
        elevation:100,
        shadowOpacity:20
    },
    success:{backgroundColor:'red'},
    primary:{backgroundColor:'grey'}
})

export default App2;