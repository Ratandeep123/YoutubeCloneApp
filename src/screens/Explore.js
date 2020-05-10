import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "../components/Header";
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';


const Littlecard = ({ name }) => {

    return (
        <View style={{ backgroundColor: "red", height: 50, width: 180, borderRadius: 4, marginTop: 10 }}>
            <Text style={{ fontSize: 32, width: 180, color: "black", backgroundColor: "red", textAlign: "center", borderRadius: 6 }}>
                {name}
            </Text>
        </View>
    )
}
const Explore = () => {
    const cardData = useSelector(state => {
        return state
    })
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ScrollView>
                <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
                    <Littlecard name="Gaming" />
                    <Littlecard name="Music" />
                    <Littlecard name="Dancing" />
                    <Littlecard name="News" />
                    <Littlecard name="Movies" />
                    <Littlecard name="fashion" />
                </View>
                <Text style={{ margin: 8, fontSize: 22, borderBottomWidth: 1 }}>Trending Videos</Text>

                <FlatList data={cardData}
                    renderItem={({ item }) => {
                        return <Card videoId={item.id.videoId}
                            title={item.snippet.title}
                            channel={item.snippet.channelTitle}
                        />

                    }}
                    keyExtractor={item => item.id.videoId} />
            </ScrollView>
        </View>
    );
}
export default Explore