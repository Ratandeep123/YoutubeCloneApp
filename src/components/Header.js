import React from 'react';
import { Stylesheet, Text, View } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Constant from 'expo-constants'

import { useNavigation, useTheme } from '@react-navigation/native';
export default function Header() {
    const navigation = useNavigation()
    const { colors } = useTheme()
    const mycolor = colors.iconColor
    return (
        <View style={{
            marginTop: Constant.statusBarHeight,
            height: 45,
            backgroundColor: colors.headerColor,
            flexDirection: "row",
            justifContent: "space-between",
            elevation: 4,

            shadowoffset: { width: 10, height: 10, }, shadowColor: "black", shadowOpacity: 1.0,
        }}>
            <View style={{ flexDirection: "row", marginLeft: 5 }}>
                <AntDesign style={{ marginLeft: 15, marginTop: 5 }} name="youtube" size={30} color="red" flexDirection="row" />
                <Text style={{ fontSize: 22, marginLeft: 5, color: "white", marginTop: 5, fontWeoight: "700" }}>YouTube</Text>
            </View>
            <View>
                <Ionicons name="md-videocam" size={30} color="white" style={{ marginLeft: 180, marginTop: 5 }} />
                <Ionicons name="md-search" size={30} color="white" style={{ marginLeft: 220, marginTop: -28 }}
                    onPress={() => navigation.navigate("search")} />
                <MaterialIcons name="account-circle" size={32} color="white" style={{ marginLeft: 250, marginTop: -32 }} />
            </View>
        </View>
    );
} 