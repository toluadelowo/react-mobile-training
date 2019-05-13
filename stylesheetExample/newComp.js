import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

// const tigerImg = require("../")

class NewComp extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={{ uri: "https://usatftw.files.wordpress.com/2019/03/tiger1-1.jpg?w=300&h=300&crop=1" }}
        style={{ width: 250, height: 200, borderRadius: 10 }}
        />
        <Image
        source={{ uri: "https://usatftw.files.wordpress.com/2019/03/tiger1-1.jpg?w=300&h=300&crop=1" }}
        style={{ width: 250, height: 200, borderRadius: 10 }}
        />
        <Text> COMMON NAME: for stylesheets </Text>
        <Text> SCIENTIFIC NAME: for stylesheets </Text>
        <Text> LIFE EXPECTANCY: for stylesheets </Text>
        <Text> ENDANGERED STATUS: for stylesheets </Text>
      </View>
    );
  }
}

export default NewComp;
