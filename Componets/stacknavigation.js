import React from 'react'
import { View, Text, StatusBar, Button, Alert } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import  Home  from './home.js'
import  Login  from './loginsc.js'
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

export default App2