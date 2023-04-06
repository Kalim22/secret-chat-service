import { StyleSheet, View, useWindowDimensions, Text } from 'react-native'
import React from 'react'

import Input from '../components/Input'
import Button from '../components/Button'

const Login = () => {

    const {width} = useWindowDimensions()

  return (
    <View style={[styles.container]}>
        <View style={[styles.inputContainer]}>
            <Input placeholder="Enter your email..." width={width - 20}/>
            <Input placeholder="Enter your password..." width={width - 20} secureTextEntry={true}/>
            <Button buttonText="Login" width={width / 3}/>
      </View>
      <View style={[styles.btnContainer]}>
        <Text>
            Don't Have Account. Click on Register Button
        </Text>
            <Button buttonText="Register Here" width={width / 2}/>
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

export default Login
