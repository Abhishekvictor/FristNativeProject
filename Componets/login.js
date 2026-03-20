import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert, TouchableHighlight, Pressable, TextInput, } from 'react-native'


const Formpage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [display, setDisplay] = useState('');

    const restFormDate = () => {
        setDisplay(false)
        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <View>
            {/* Hedding of form page */}
            <Text style={{ fontSize: 30 }}> Simple Form in React Native</Text>

            {/* User Name */}
            <TextInput style={style.textInput}
                placeholder='Enter the User Name'
                onChangeText={(text) => setName(text)}
                value={name}
            />

            {/* User Email */}
            <TextInput style={style.textInput}
                placeholder='Enter Your Email'
                onChangeText={(text) => setEmail(text)}
                value={email}
            />

            {/* Enter your Password */}
            <TextInput style={style.textInput}
                placeholder='Enter Your Password '
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />

            {/* Button of form page  */}
            <View style={{ marginBottom: 10 }}>
                <Button color={'lightgreen'} title='Print Details'
                    onPress={() => setDisplay(true)}
                />
            </View>
            <Button title='Clear Details' onPress={restFormDate} />

            {/* display the values */}
            <View>
                {
                    display ?
                        <View style={btnstyle}>
                            <Text style={{ fontSize: 20 }}>This is the User Name: {name}</Text>
                            <Text style={{ fontSize: 20 }}>This is the User Email: {email}</Text>
                            <Text style={{ fontSize: 20 }}>This is the User Password: {password}</Text>
                        </View>
                        : null
                }
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    textInput: {
        fontSize: 18,
        color: 'blue',
        borderWidth: 2,
        borderColor: 'blue',
        margin: 10,

    },
    btnstyle:{

    }
})



export default Formpage;