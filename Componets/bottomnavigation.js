
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

const App2 = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Login' component={Login}></Tab.Screen>
                <Tab.Screen name='Singup' component={SingUp}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>

    )
}

const Login = () => {
    return (
        <Text> Login</Text>
    )
}
const SingUp = () => {
    return (
        <Text> SingUp</Text>
    )
}

export default App2