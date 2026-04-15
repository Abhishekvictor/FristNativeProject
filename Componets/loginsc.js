
import { View, Text} from 'react-native'
const Login = (props) => {
    const {Name,age}=props.route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> This is Login Screen </Text>
            <Text style={{fontSize:30}}> Name : {Name} </Text>
            <Text style={{fontSize:30}}> Age : {age} </Text>
        </View>
    )
}

export default Login;
