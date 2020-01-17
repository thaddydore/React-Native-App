import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Flex = props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: "#3A3335"}} />
            <View style={{ flex: 2, backgroundColor: "#FDF0D5"}} />
            <View style={{ flex: 3, backgroundColor: "#C6D8D3"}} />
            <View style={{ flex: 4, backgroundColor: "#F0544F"}} />
        </View>
    )
}

export default Flex;