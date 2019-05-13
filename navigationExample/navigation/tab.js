import React from "react"
import Satellite from "../Satellite"
import Terrain from "../Terrain"
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation"
import { Ionicons } from '@expo/vector-icons';
import Howdoyoulikethetutorial from "../Howdoyoulikethetutorial";
import ReactNativeTutorials from "../ReactNativeTutorials";


const SatelliteStack = createStackNavigator({
    Sate: Satellite,
    ReactNativeTutorials: ReactNativeTutorials
}, {
    navigationOptions: {
        tabBarIcon: ({ focused }) => <Ionicons name="md-map" size={28} color={ focused ? "green" : "gray"} />
    }
})

const TerrainStack = createStackNavigator({
    Terrain: Terrain,
    StackTwo: Howdoyoulikethetutorial
}, {
    navigationOptions: {
        tabBarIcon: ({ focused }) => <Ionicons name="md-checkmark-circle" size={28} color={ focused ? "green" : "gray"} />
    }
})


const RootTab = createBottomTabNavigator(
    {
        Terrain: Terrain,
        Satellite: Satellite
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'purple',
            activeBackgroundColor: "black",
            labelStyle: {
                fontSize: 20
            },
            tabStyle: {
                backgroundColor: "gold",
                // height: 80,
            },
            // showLabel: false
        }
    }
)

export const TabNav = createAppContainer(RootTab)