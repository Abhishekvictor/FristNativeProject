
import { Text, View, FlatList } from "react-native";

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
    ]
return (

    <View style={{marginTop:30}}>
        <Text style={{fontSize:20}}>This User list</Text>

        <FlatList
        data={users}
        renderItem={({user})=> <Text style={{fontSize:30}}> {user.userName} </Text>}
        
        />
    </View>
    )
}

export default Flastlist