import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CastDisplay = ({data}) => {
    console.log(data);
  return (
    <View style={{justifyContent:"center",alignItems:"center",padding:10,backgroundColor:"#7af564"}}>
    <View style={{justifyContent:"center",alignItems:"center",padding:5,backgroundColor:"#f58164",height:100,width:300,borderRadius:10,}}>
        <View>
        <Text style={{fontSize:18,fontWeight:"bold"}}>{data.item.name}</Text>
        </View>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <Text style={{fontSize:18,fontWeight:"bold"}}>Birth : </Text>
        <Text>{data.item.born}</Text>
        </View>
        <Text style={{textDecorationLine:"underline"}}>More</Text>
    </View>
      
    </View>
  )
}

export default CastDisplay

const styles = StyleSheet.create({})