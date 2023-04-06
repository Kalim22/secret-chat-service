import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'
import ChatList from './pages/ChatList'
import ChatWindow from './pages/ChatWindow'

const App = () => {
  return (
    <>
      {/* <Welcome /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ChatList /> */}
      <ChatWindow />
    </>
  )
}

export default App

const styles = StyleSheet.create({})