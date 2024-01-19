import { View, Text, TextInput, TouchableOpacity,FlatList } from 'react-native'
import React, { useState } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { data } from '../../assests';

const Dob = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderWidth: 1, width: "90%", marginLeft: 10, marginTop: 10, borderRadius: 5 }}>
            <View>
                <TextInput placeholder='dob' placeholderTextColor={"black"} />
            </View>
            <TouchableOpacity onPress={() => setToggle(!toggle)}>
                {toggle ? <AntDesign name="down" size={20} color={"black"} /> : <AntDesign name="up" size={20} color={"black"} />}
            </TouchableOpacity>
        </View>
            <FlatList 
            data={data}
            keyExtractor={(item,id)=>id.toString()}
            renderItem={({item})=>{
                return(
                    <View style={{flexDirection:"row",justifyContent:"space-evenly",borderWidth:1,width:"80%",alignSelf:"center"}}>
                        <Text style={{fontSize:20,color:"black"}}>{item.date}</Text>
                        <Text style={{fontSize:20,color:"black"}}>{item.date}</Text>
                        <Text style={{fontSize:20,color:"black"}}>{item.date}</Text>
                    </View>
                )
            }} />

 

        </View>
    );
}

export default Dob;
