import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Constant from 'expo-constants'
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import Home from './src/screens/Home'
import Search from './src/screens/Search';
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeReducer } from './src/reducers/ThemeReducer'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer } from './src/screens/reducers/reducer'


const rootReducer = combineReducers({
  cardData: reducer,//[],
  mydarkMode: ThemeReducer,
})
const store = createStore(reducer)
const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()


const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: "#404040",
    iconColor: "white",
    tabIcon: "gray"
  }
}

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: "white",
    iconColor: "black",
    tabIcon: "red"
  }
}
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
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={customDarkTheme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}
