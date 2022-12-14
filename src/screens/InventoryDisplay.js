import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InventoryDisplay = ({data}) => {
  return (
    <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"#7af564",padding:10,marginTop:10,borderRadius:10}}>
      <Text style={{textDecorationLine:"underline",marginTop:10}}>{data.item.category}</Text>
      <Text style={{fontSize:18,fontWeight:"bold"}}>{data.item.title}</Text>
      <Text style={{color:"red",fontWeight:"bold"}}>{data.item.slogan}</Text>
      <Text>{data.item.description}</Text>
      <View style={{backgroundColor:"yellow",width:200,padding:10,borderRadius:10,borderWidth:2,borderStyle:"dotted"}}>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text>Price</Text>
            <Text>Stock</Text>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Text>{data.item.price}</Text>
            <Text>{data.item.stock}</Text>
        </View>
      </View>

    </View>
  )
}

export default InventoryDisplay

const styles = StyleSheet.create({})