import React from "react";
import { Button, View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
    const navigation = useNavigation();
    const onJoinPress = (userID, userName) => {
        navigation.navigate('CallPage', {
            userID: userID,
            userName: userName
        })
    }
    return (
        <View style={styles.container}>
            <Button title="Join As Nick Nelson" onPress={() => { onJoinPress('oliver', 'Oliver') }} />
            <Button title="Join As Ben Hope" onPress={() => { onJoinPress('jack', 'Jack') }} />
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})