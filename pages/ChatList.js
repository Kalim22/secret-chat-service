import { Animated, FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useRef } from 'react'

import { chatUserList } from "../assets/constants/constants"
import Header from '../components/Header'



const ChatList = () => {

    const { width, height } = useWindowDimensions()

    // const scrollRef = useRef(new Animated.Value(0)).current

    return (
        <View style={[styles.container]}>
           <Header />
            <FlatList
                // ref={scrollRef}
                data={chatUserList}
                // onScroll={Animated.event(
                //     [{nativeEvent: {contentOffset: {y: scrollY}}}],
                //     {useNativeDriver: true}
                // )}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<Text style={{ fontSize: 28, fontWeight: '600' }}>Loading...</Text>}
                contentContainerStyle={{ paddingBottom: 30, marginTop: 5 }}
                renderItem={({ item }) => (
                    <Animated.View style={{ width: width - 5, backgroundColor: 'gray', marginVertical: 2, flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10, borderRadius: 3 }}>
                        <View style={{ width: width / 7, justifyContent: 'center', alignItems: 'center', }}>
                            <Image source={item.userIcon} resizeMode='cover' style={{ width: 50, height: 50 }} />
                        </View>
                        <View style={{ width: width, paddingHorizontal: 10, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>{item.name}</Text>
                            <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>{item.lastMessage}</Text>
                        </View>
                    </Animated.View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },

})

export default ChatList
