import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Satellite extends Component {
    static navigationOptions = {
        tabBarIcon: ({ focused }) => <Ionicons name="md-map" size={28} color={ focused ? "green" : "gray"} />
    }

  render() {
    return (
      <View style={{ backgroundColor: "green", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 70, color: "#fff" }}> Satellite View </Text>
      </View>
    );
  }
}

export default Satellite;
