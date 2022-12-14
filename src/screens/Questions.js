import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import quiz from '../../Constants/quiz'
const Questions = () => {
  return (
    <View>

      <Text>Questions</Text>
      <FlatList data={quiz.questions}
        renderItem={item=>
        <View>
            <Text style={{fontWeight:"bold"}}>{item.item.question}</Text>
            
        </View>}
      />
    </View>
  )
}

export default Questions

const styles = StyleSheet.create({})