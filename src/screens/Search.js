import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimension,
    Dimensions, TextInput, ScrollView, FlatList, ActivityIndicator

} from "react-native";
import { useTheme } from '@react-navigation/native'
import MiniCard from '../components/MiniCard';
import Constant from 'expo-constants';
import { useSelector, useDispatch } from 'react-redux'

const Search = ({ navigation }) => {
    const { colors } = useTheme()
    const mycolor = colors.iconColor
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const MiniCardData = useSelector(state => {
        return state
    })
    const [miniCardData, setMiniCard] = useState([])
    const fetchData = () => {
        setLoading(true)
        // api key add
        fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&videoType=any&key= Add Api key")
            .then(res => res.json()).then(data => {
                setLoading(false)
                // setMiniCard(data.items)
                dispatch({ type: "add", payload: data.items })
            })
    }
    return (

        <View style={{ flex: 1, marginTop: Constant.statusBarHeight }}>
            <View
                style={{
                    padding: 10,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    elevation: 5,
                    backgroundColor: "gray",
                }}
            >
                <Ionicons style={{ color: mycolor }} name="md-arrow-back" size={32}
                    onPress={() => navigation.goBack()} />
                <TextInput
                    style={{ width: "80%", backgroundColor: "#e6e6e6" }}
                    value={value}
                    onChangeText={(text) => {
                        setValue(text)
                    }}
                />
                <Ionicons style={{ color: mycolor }} name="md-send" size={32} onPress={() => fetchData()} />
            </View>
            {loading ?
                < ActivityIndicator style={{ marginTop: 10 }} size="large" color="red" /> : null}
            < FlatList
                data={MiniCardData} renderItem={({ item }) => {
                    return <MiniCard
                        videoId={item.id.videoId}
                        title={item.snippet.title}
                        channel={item.snippet.channelTitle} />
                }}
                keyExtractor={item => item.id.videoId} />

        </View>
    );
};
export default Search;
