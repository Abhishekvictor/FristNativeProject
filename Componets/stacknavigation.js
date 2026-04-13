import { View, Text, StatusBar, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();
const App2 = () => {
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
                <Stack.Screen name='Login' component={Login} />
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
