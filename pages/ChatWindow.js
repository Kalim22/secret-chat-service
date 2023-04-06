import { StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Input from '../components/Input'

import IconF from "react-native-vector-icons/FontAwesome"

const ChatWindow = () => {
    const {width} = useWindowDimensions()
  return (
    <View style={[styles.container]}>
     <Header />
     <View style={[styles.msgContainer]}>
        <Text style={{fontSize: 20,backgroundColor: 'darkgray',borderRadius: 10,paddingHorizontal: 10,paddingVertical: 3, marginVertical: 3,alignSelf: 'flex-start', color: 'red'}}>Hello Kalim</Text>
        <Text style={{fontSize: 20,backgroundColor: 'darkgray',borderRadius: 10,paddingHorizontal: 10,paddingVertical: 3, marginVertical: 3, color: 'green', alignSelf: 'flex-end'}}>Hello Arsenal</Text>
     </View>
     <View style={[styles.inputContainer, {width}]}>
        <TextInput placeholder='Messages...' style={[styles.input, {width:width - 100}]}/>
        <View style={[styles.btnContainer]}>
        <IconF name="send" size={25} color="white"/>
        </View>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        paddingHorizontal: 10
    },
    msgContainer: {
        flex: 0.92,
        paddingHorizontal: 10,
        justifyContent: 'flex-end',
        paddingVertical: 10
    },
    inputContainer: {
        flex: 0.08,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderTopColor: 'black',
        borderTopWidth: 1
    },
    btnContainer: {
        backgroundColor: 'darkgreen',
        width: 45,
        height: 45,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})

export default ChatWindow
