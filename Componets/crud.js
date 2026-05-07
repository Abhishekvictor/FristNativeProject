import React, { useEffect, useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

const App2 = () => {
    const [data, setData] = useState([])
    // modal state 
    const [showModal, setShowModal] = useState(false)
    // user data modal state
    const [selectedUsers, setselectedUsers] = useState(null)


    const getApi = async () => {
        const url = 'http://10.18.202.205:3000/users'
        let result = await fetch(url)
        result = await result.json()
        if (result) {
            setData(result)
        }
    }

    const userUpdata = (data) => {
        setShowModal(true)
        setselectedUsers(data)
    }


    const deleteUser = async (id) => {
        const url = 'http://10.18.202.205:3000/users'
        let result = await fetch(`${url}/${id}`, {
            method: 'delete'
        })
        result = await result.json()
        if (result) {
            getApi();

        }


    }

    useEffect(() => {
        getApi();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.dataWapper}>

                <View style={{ flex: 1 }} ><Text>Name</Text></View>
                <View style={{ flex: 1 }} ><Text>age</Text></View>
                <View style={{ flex: 1 }} ><Text>Operation</Text></View>

            </View>


            {data.length
                ?
                data.map((item) => {
                    return (


                        <View key={item.id} style={styles.dataWapper}>


                            <View style={{ flex: 1 }}> <Text>{String(item.name)}</Text></View>
                            <View style={{ flex: 1 }}> <Text>{String(item.age)}</Text></View>
                            <View style={{ flex: 1 }}>  <Button onPress={() => deleteUser(item.id)} title="Delete" color={"black"}></Button></View>
                            <View style={{ flex: 1 }}>  <Button title="Update" color={"purple"} onPress={() => userUpdata(item)}></Button></View>

                        </View>

                    )
                })
                : null}



            <Modal visible={showModal} transparent={true}>
                <UserModal setShowModal={setShowModal} selectedUsers={selectedUsers} getApi={getApi} ></UserModal>
            </Modal>

        </View>
    )
}

const UserModal = (props) => {
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [email, setemail] = useState('')

    useEffect(() => {
        if (props.selectedUsers) {
            setname(props.selectedUsers.name)
            setage(props.selectedUsers.age.toString())
            setemail(props.selectedUsers.email)

        }

    }, [props.selectedUsers])

    const UpdateUser= async()=>{
        // console.log(name,age,email, props.selectedUsers.id)
         const url = 'http://10.18.202.205:3000/users'
        const id = props.selectedUsers.id;
         let result = await fetch(`${url}/${id}`,{
            method:"Put",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,age,email})
         })
         result = await result.json();

         if(result){
            console.log(result);
            props.getApi()
            props.setShowModal(false)
         }

    }




    return (
        <View style={styles.centeredview}>
            <View style={styles.modalview}>
                <TextInput style={styles.inputbox} value={String(name)}
                    onChangeText={(text) => setname(text)}
                    placeholder="Enter your Name"
                ></TextInput>
                <TextInput style={styles.inputbox} value={age}
                    onChangeText={(newText) => setage(newText)}
                    placeholder="Enter your age"
                ></TextInput>
                <TextInput style={styles.inputbox} value={String(email)}
                    onChangeText={(newText) => setemail(newText)}
                    placeholder="Enter your email"
                ></TextInput>
                <View style={{ marginBottom: 10 }}> <Button title='Save Detail' onPress={UpdateUser}></Button> </View>
                <Button title="Close" onPress={() => props.setShowModal(false)}></Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dataWapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'orange',
        margin: 2,
        padding: 10,

    },
    centeredview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalview: {
        backgroundColor: '#ffff',
        padding: 40,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        elevation: 10
    },
    inputbox: {
        borderColor: 'purple',
        borderRadius: 10,
        borderWidth: 2,
        width: 300,


    }

})
export default App2