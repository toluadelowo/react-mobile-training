import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import style from './style';
import colors from '../styles/colors';

class StyleSheet3Example extends Component {

  render() {
    return (
      <View style={style.container}>
      <Image
            source={{ uri: "https://usatftw.files.wordpress.com/2019/03/tiger1-1.jpg?w=300&h=300&crop=1" }}
            style={style.tigerImg}
        />
        <Image
            source={{ uri: "https://usatftw.files.wordpress.com/2019/03/tiger1-1.jpg?w=300&h=300&crop=1" }}
            style={style.tigerImg}
        />
        <Text style={style.generalText}> COMMON NAME: for stylesheets </Text>
        <Text style={[style.generalText, colors.red, style.goldText, { textTransform: "lowercase" }]}> 
            SCIENTIFIC NAME: for stylesheets
        </Text>
        <Text style={style.generalText}> LIFE EXPECTANCY: for stylesheets </Text>
        <Text style={style.generalText}> ENDANGERED STATUS: for stylesheets </Text>
      </View>
    );
  }
}

export default StyleSheet3Example;
