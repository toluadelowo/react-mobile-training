import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

StyleSheet.create({})

class FlexBox extends Component {

  render() {
    return (
      <View style={{ backgroundColor: "orange", flex: 1, alignItems: "flex-end", flexGrow: 5,
      flexBasis: 3  }}>
        <View style={{ width: 100, height: 100, backgroundColor: "red" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "blue", }} />
        <View style={{ width: 100, height: 100, backgroundColor: "green", }} />
      </View>
);
  }
}

export default FlexBox;
