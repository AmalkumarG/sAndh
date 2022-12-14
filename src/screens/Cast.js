import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React ,{useState,useEffect}from 'react'
import { FlatList } from 'react-native-gesture-handler'
import CastDisplay from './CastDisplay'

const Cast = () => {
    const [cast,setcast]=useState([])
    useEffect( async()=>{
        await fetch("https://api.sampleapis.com/futurama/cast").then(res=>res.json()).then(json=>setcast(json))
    },[])

  return (
    <View>
    <StatusBar backgroundColor={"green"}/>
      <FlatList
        data={cast}
        renderItem={item=><CastDisplay data={item}/>}
      />
    </View>
  )
}

export default Cast

const styles = StyleSheet.create({})