import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const CharDisplay = ({data}) => {
    console.log(data.item.name.first);
  return (
    <View style={{backgroundColor:"#7af564",margin:10,padding:15,borderWidth:5,borderRadius:15,borderColor:"black",elevation:20}}>

    <Image source={{uri:data.item.images.main}} style={{height:300,}} resizeMode="contain"/>
    <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"#f58164",borderRadius:15,borderWidth:5,borderStyle:"dashed",padding:5,flexWrap: 'wrap'}}>
        <View style={{flexDirection:"row",flexWrap: 'wrap'}}>
            <Text style={{fontWeight:"bold",fontSize:18}}>NAME : </Text>
            <Text style={{fontSize:15}}>{data.item.name.first} </Text>
            <Text style={{fontSize:15}}>{data.item.name.middle}</Text>
            <Text style={{fontSize:15}}>{data.item.name.last}</Text>
        </View>
        <View style={{flexDirection:"row"}}>
            <Text style={{fontWeight:"bold",fontSize:18}}>GENDER : </Text>
            <Text style={{fontSize:15}}>{data.item.gender}</Text>

        </View>
        <View style={{flexDirection:"row"}}>
            <Text style={{fontWeight:"bold",fontSize:18}}>SPECIES : </Text>
            <Text style={{fontSize:15}}>{data.item.species}</Text>

        </View>
        <View style={{flexDirection:"row"}}>
            <Text style={{fontWeight:"bold",fontSize:18}}>HOME_Planet : </Text>
            <Text style={{fontSize:15}}>{data.item.homePlanet}</Text>

        </View>
        <View style={{flexDirection:"row",flexWrap: 'wrap'}}>
            <Text style={{fontWeight:"bold",fontSize:18}}>OCCUPATION : </Text>
            <Text style={{fontSize:15}}>{data.item.occupation}</Text>

        </View>
        <View style={{flexDirection:"row"}}>
            <Text style={{fontWeight:"bold",fontSize:18}}>AGE : </Text>
            <Text style={{fontSize:15}}>{data.item.age}</Text>

        </View>
    </View>
      
    </View>
  )
}

export default CharDisplay

const styles = StyleSheet.create({})