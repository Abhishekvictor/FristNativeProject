import { View, Text, StatusBar, Button, Alert } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();
const App2 = () => {

    const btnAciton = ()=>{
        Alert.alert('button is clicked')
    }
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: 'lightblue'
                },
                headerTitleStyle: { fontSize: 25 },
                headerTintColor: 'white',

            }
            } >
                <Stack.Screen name='Home' component={Home}
                />
                <Stack.Screen name='Login' component={Login}
                 options={
                    {
                        headerLeft:()=><Button title='Left' onPress={btnAciton}></Button>,
                        headerRight:()=><Button title='Right'></Button>
                    }
                }
                
                />
            </Stack.Navigator>
        </NavigationContainer>



    )
}

const Home = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> This is Home Screen </Text>
            <Button title='go to home page' onPress={() => props.navigation.navigate('Login')}></Button>
        </View>
    )
}

const Login = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> This is Login Screen </Text>

        </View>
    )
}

export default App2;
