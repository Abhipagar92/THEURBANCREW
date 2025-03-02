import {StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MyButton = ({title , onPress}) => {
  return (
    <TouchableOpacity 
      style={styles.button}
      onPress={onPress} 
    >
        <Text style={ styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
    button:{
        backgroundColor:"orange",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 20,
        margin: 15,
        borderRadius: 10,
    },

    text:{
        fontSize:16,
        color: "black",
        fontWeight: "bold"
    }
})