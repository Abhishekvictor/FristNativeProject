
import { Text, View, FlatList, StyleSheet } from "react-native";

const Flastlist = () => {
    const users = [
        {
            id:1,
            userName:'abhishek'
        },
        {
            id:2,
            userName:'shreya'
        },
          {
            id:3,
            userName:'neha'
        },
          {
            id:4,
            userName:'nitya'
        },
          {
            id:5,
            userName:'anuj'
        },
    ]
return (

    <View style={{marginTop:30}}>
        <Text style={{fontSize:20}}>This User list</Text>

        <FlatList
        data={users}
        renderItem={({item})=><Text style={style.item}>{item.userName}</Text>}
        keyExtractor={item=>item.id}
        />
    </View>
    )
}

const style = StyleSheet.create({
    item:{
        fontSize:20,
        padding:20,
        color:'#ffff',
        backgroundColor:'blue',
        borderColor:'black',
        borderWidth:1,
        margin:5,
        





    }

})

export default Flastlist