import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import InventoryDisplay from './InventoryDisplay'

const Inventory = () => {
    const [inventory,setinventory]=useState([])
    useEffect( async()=>{
        await fetch("https://api.sampleapis.com/futurama/inventory").then(res=>res.json()).then(json=>setinventory(json))
    },[])
console.log(inventory);
  return (
    <View style={{flex:1,justifyContent:"center",backgroundColor:"#f58164",padding:10}}>
    <StatusBar backgroundColor={"green"}/>
    <Text style={{fontSize:20,fontWeight:"bold",color:"white"}}>Inventory</Text>
      <FlatList data={inventory} showsVerticalScrollIndicator={false}
        renderItem={item=><InventoryDisplay data={item}/>}
      />
    </View>
  )
}

export default Inventory

const styles = StyleSheet.create({})