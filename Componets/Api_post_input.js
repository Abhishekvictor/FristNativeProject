import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Alert, ToastAndroid } from "react-native";

const App2 = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState('')

    const [nameError, setnameError] = useState(false)
    const [ageError, setageError] = useState(false)
    const [emailError, setemailError] = useState(false)





    const saveData = async () => {
        if (!name) {
            setnameError(true)
        } else {
            setnameError(false)
        }
        if (!age) {
            setageError(true)
        }
        else {
            setageError(false)
        }
        if(!email){
            setemailError(true)
        }
        else{
            setemailError(false)
        }

        if (!name || !age || !email) {
            return (false)
        }
        const url = "http://10.18.202.205:3000/users"
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": 'application/json'
            },
            body: JSON.stringify({ name, age, email })
        })

        if (result) {
            ToastAndroid.show("Data saved successfully!", ToastAndroid.LONG);
        }




    }

    return (
        <View>

            <TextInput placeholder="Enter the name" value={name} onChangeText={(text) => setName(text)} style={styles.inputText}></TextInput>
            {nameError ? <Text>Enter the name</Text> : null}
            <TextInput placeholder="Enter the age" value={age} style={styles.inputText} onChangeText={(text) => setAge(text)}></TextInput>
            {ageError ? <Text>Enter the age</Text> : null}
            <TextInput placeholder="Enter the email" value={email} style={styles.inputText} onChangeText={(text) => setEmail(text)}></TextInput>
            {emailError ? <Text>Enter the email</Text> : null}

            <Button title="Submit Detail" onPress={saveData} color={"#f194ff"}></Button>

        </View>
    )
}

const styles = StyleSheet.create(
    {
        inputText: {
            borderColor: 'blue',
            margin: 10,
            borderWidth: 2,


        },

    }
)
export default App2