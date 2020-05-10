import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const RootHome = () => {
    const { colors } = useTheme()
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;

                    if (route.name === 'home') {
                        iconName = 'home';

                    } else if (route.name === 'Explore') {
                        iconName = 'explore';
                    }
                    else if (route.name === 'Suscribe') {
                        iconName = 'subscriptions'
                    }

                    // You can return any component that you like here!
                    return <MaterialIcons name={iconName} size={32} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: colors.tabIcon,
                inactiveTintColor: 'gray',
            }}>
            <Tabs.Screen name="home" component={Home} />
            <Tabs.Screen name="Explore" component={Explore} />
            {/* <Tabs.Screen name="videoplayer" component={VideoPlayer} /> */}
            <Tabs.Screen name="Suscribe" component={Subscribe} />
        </Tabs.Navigator >
    );
}