import {View, Text, SectionList} from 'react-native'

const users = [
    {
        id:1,
        name:'abhishek',
        data:['PHP','Reat js','Angular']
    },
     {
        id:1,
        name:'peter',
        data:['java','C ','C++']
    },
     {
        id:1,
        name:'Tony',
        data:['Python','React native','HTML']
    },
]
const SectionListex = () =>{
    return(
        <View>
            <SectionList
            sections={users}
            renderItem={({item})=><Text>{item}</Text>}
            renderSectionHeader={({section:{name}})=>(
                <Text style={{fontSize:25, color:'red',}}>{name}</Text>
            )}
            />

            
        </View>
    )
}

export default SectionListex