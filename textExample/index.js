import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        paddingHorizontal: 20
    },
    textStyle: {
        fontSize: 25
    },
    textHeader: {
        color: "blue"
    }
})

class TextExample extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text
            style={[styles.textStyle, styles.textHeader]}
            selectable={true}
        >
            Working with Components
        </Text>
        <Text
            style={styles.textStyle}
            numberOfLines={4}
            ellipsizeMode="middle"
        >
            Thank you for the emails and InMails – we have them.
            I may be slow to get back but I want to use this medium to thank everyone ahead.
            To those that travelled from far to meet me which 
            unfortunately did not happen, I will make time to speak with all.
        </Text>
      </View>
    );
  }
}

export default TextExample;
