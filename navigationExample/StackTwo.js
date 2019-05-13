import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class StackTwo extends Component {

    static navigationOptions = {
        title: "Stack Two"
    }

  render() {
    return (
      <View style={{ backgroundColor: "brown", flex: 1 }}>
        <Text style={{ fontSize: 60 }}> Stack Two Component </Text>

        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={{ color: "#fff" }} >GO BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default StackTwo;
