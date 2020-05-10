import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useTheme } from '@react-navigation/native';
const Card = (props) => {

    const navigation = useNavigation();
    const { colors } = useTheme()
    const textcolor = colors.iconColor

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("videoplayer", { videoId: props.videoId, title: props.title })}>
            <View style={{ marginBottom: 10 }}

            >

                <Image source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}

                    style={{ width: "100%", height: 245, }} />


                <View style={{
                    flexDirection: "row", marginTop: 5
                }}>

                    <MaterialIcons name="account-circle" size={32} color="white" />
                    <View
                        style={{
                            marginLeft: 10
                        }}>
                        <Text style={{
                            fontSize: 20,
                            color: "white"
                        }}>
                            <Text style={{ color: "white", ellipsizeMode: "middle", numberOfLines: 2 }}>{props.title}</Text>
                        </Text>

                        <Text style={{
                            fontSize: 15
                        }}>
                            <Text style={{
                                color: "white"
                            }}>
                                {props.channel}</Text>
                        </Text>
                    </View>
                </View>


            </View>
        </TouchableOpacity>
    );
}
export default Card