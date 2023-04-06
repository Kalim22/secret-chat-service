import { StyleSheet, View, useWindowDimensions, Text } from 'react-native'
import React from 'react'

import Input from '../components/Input'
import Button from '../components/Button'

const Register = () => {

    const {width} = useWindowDimensions()

  return (
    <View style={[styles.container]}>
        <View style={[styles.inputContainer]}>
            <Input placeholder="Enter your name..." width={width - 20}/>
            <Input placeholder="Enter your email..." width={width - 20} />
            <Input placeholder="Enter your age..." width={width - 20} keyboardType="numeric"/>
            <Input placeholder="Enter your gender..." width={width - 20} />
            <Input placeholder="Enter your password..." width={width - 20} secureTextEntry={true}/>
            <Button buttonText="Register" width={width / 3}/>
      </View>
      <View style={[styles.btnContainer]}>
        <Text>
            Already Registered. Click on Login Button
        </Text>
            <Button buttonText="Sign In" width={width / 3} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    inputContainer: {
        flex: 0.80,
        justifyContent: 'center',
        alignItems: "center"
    },
    btnContainer: {
        flex: 0.20,
        justifyContent: 'center',
        alignItems: "center"
    }
})

export default Register