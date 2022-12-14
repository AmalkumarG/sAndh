import { Image, StyleSheet, Text, View,ScrollView,StatusBar ,LogBox} from 'react-native'
import React,{useState,useEffect} from 'react'
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const Info = () => {
    const [info,setInfo]=useState([])
    useEffect( async()=>{
        await fetch("https://api.sampleapis.com/futurama/info").then(res=>res.json()).then(json=>setInfo(json))
    },[])
    console.log(info);
  return (
    
  
<View style={styles.container}>
<Image source={{uri:"https://futurama-info.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphilip.553a0f69.png&w=828&q=75"}} style={{height:200,width:"80%"}} resizeMode="contain"/>

<ScrollView style={{padding:5}}>
{
        info.map(item=>(
            <View >
            <StatusBar backgroundColor={"green"}/>
            <View style={styles.info}>
            <Text style={styles.infoText}>
                    {item.synopsis}
                </Text>
            </View>

                <View style={{justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>YEARSAIRED</Text>
                <View>
                        <Text>{item.yearsAired}</Text>
                    </View>
                    
                </View>
                <View style={{justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:18,fontWeight:"bold"}}>CREATORS</Text>
                <View>
                {item.creators.map(creator=>(
                    <View>
                        <Text>{creator.name}</Text>
                    </View>
                ))}
                </View>
                    
                </View>
            </View>
        ))
    }
    <View style={{height:20}}></View>
</ScrollView>

</View>

  )
}

export default Info

const styles = StyleSheet.create({
    container:{flex:1,
    alignItems:"center",backgroundColor:"#4feb34"},
    info:{
        borderWidth:1,borderRadius:10,padding:5,elevation:40,backgroundColor:"#7ef569",shadowColor:"black",shadowOpacity:1
    },
    infoText:{
        fontSize:15,fontWeight:"bold"
    }
})