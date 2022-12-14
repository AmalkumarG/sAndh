import { FlatList, StyleSheet, Text, View ,StatusBar} from 'react-native'
import React,{useState,useEffect} from 'react'
import CharDisplay from './CharDisplay'

const Characters = () => {
    const [characters,setCharacters]=useState([])
    useEffect( async()=>{
        await fetch("https://api.sampleapis.com/futurama/characters").then(res=>res.json()).then(json=>setCharacters(json))
    },[])

  return (
    <View style={{flex:1,justifyContent:"center",backgroundColor:"#f58164",padding:10}}>
    <StatusBar backgroundColor={"green"}/>
      <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Characters</Text>
      <FlatList data={characters} showsVerticalScrollIndicator={false}
        renderItem={item=><CharDisplay data={item}/>}
      />
    </View>
  )
}

export default Characters

const styles = StyleSheet.create({})