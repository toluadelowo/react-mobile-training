import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    tigerImg: {
        width: 250,
        height: 200,
        borderRadius: 50
    },
    generalText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    brownText: {
        color: "brown"
    },
    goldText: {
        color: "gold"
    }
})

class StyleSheet2Example extends Component {

  render() {
    return (
      <View style={styles.container}>
      <Image
        source={{ uri: "https://usatftw.files.wordpress.com/2019/03/tiger1-1.jpg?w=300&h=300&crop=1" }}
        style={styles.tigerImg}
        />
        <Image
        source={{ uri: "https://usatftw.files.wordpress.com/2019/03/tiger1-1.jpg?w=300&h=300&crop=1" }}
        style={styles.tigerImg}
        />
        <Text style={styles.generalText}> COMMON NAME: for stylesheets </Text>
        <Text
            style={[
                styles.generalText,
                styles.brownText,
                styles.goldText,
                colors.green,
                { textTransform: "lowercase", letterSpacing: 10, backgroundColor: "teal" }
            ]}
        > 
            SCIENTIFIC NAME: for stylesheets
        </Text>
        <Text style={styles.generalText}> LIFE EXPECTANCY: for stylesheets </Text>
        <Text style={styles.generalText}> ENDANGERED STATUS: for stylesheets </Text>
      </View>
    );
  }
}

export default StyleSheet2Example;
