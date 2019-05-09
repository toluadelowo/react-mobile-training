import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


class Terrain extends Component {

static navigationOptions = {
    tabBarIcon: ({ focused }) => <Ionicons name="md-checkmark-circle" size={28} color={ focused ? "green" : "gray"} />
}

  render() {
    return (
      <View style={{ backgroundColor: "brown", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 70, color: "#fff" }}> Terrain View </Text>
        {/* <Button
        title="Navigate"
        color="#fff"
        onPress={() => this.props.navigation.navigate("StackTwo")}
         /> */}
      </View>
    );
  }
}

export default Terrain;
