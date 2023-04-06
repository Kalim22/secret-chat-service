import { FlatList, StyleSheet, Text, View, useWindowDimensions, Animated, Easing, TouchableOpacity } from 'react-native'
import React, {useEffect, useRef} from 'react'

import {words} from '../assets/constants/constants'

import IconM from "react-native-vector-icons/MaterialIcons"
import IconA from "react-native-vector-icons/AntDesign"



const Welcome = () => {
    const {width, height} = useWindowDimensions()

    const opacity = useRef(new Animated.Value(0)).current

    
    Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false
    }).start()

  return (
    <View style={[styles.container]}>
        <View style={{flex: 0.92}}>
      <Animated.FlatList 
      ref={opacity}
      contentContainerStyle={{justifyContent: 'center', flexGrow: 1}}
      style={{
        opacity: opacity,
        transform:[{
            translateY: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [500, 0],
            })
        }]
      }}
      ListEmptyComponent={<Text style={[styles.words]}>Loading...</Text>}
      data={words}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => {
        return(
            <Text style={[styles.words]}>{item.word}</Text>
        )
      }}
      />
      </View>
      <View style={{flex: 0.08, backgroundColor: 'lime', width, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={[styles.btn, {width: 60, height: 60}]}>
            {/* <IconM name='navigate-next' color="#fff" size={50}/> */}
            <IconA name='arrowright' color="#fff" size={50}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "lightgray",
        justifyContent: 'center',
        alignItems: 'center'
    },
    words: {
        fontSize: 42,
        fontWeight: '600',
        color: '#fff',
        marginVertical: 5,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    btnText: {
        fontSize: 20,
        fontWeight: '500',
        color: "#fff"
    }
})

export default Welcome
