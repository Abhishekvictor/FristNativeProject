import { useRef } from "react";
import { Button, Text, TextInput, View } from "react-native";

const App2 = () => {
    const input = useRef();

    const updatainput = ()=>{

            console.log("call")
            input.current.focus();
        input.current.setNativeProps(
            {
                fontSize:30


            }
        )
    }


    return (
        <View>
            <TextInput ref={input} style={{ borderColor: 'blue', borderWidth: 2 }} placeholder="enter the name" ></TextInput>
            <TextInput style={{ borderColor: 'red', borderWidth: 2 }} placeholder="enter the detail"  ></TextInput>
            <Button title="updata" onPress={updatainput}></Button>
        </View>
    )
}

export default App2