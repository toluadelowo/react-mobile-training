import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        paddingHorizontal: 20
    },
    textHeader: {
        fontWeight: "bold",
        fontSize: 20
    }
})

class TextInputExample extends Component {
    state = {
        text: ""
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}> Working With Components </Text>
        <TextInput
            placeholder="Email Address"
            autoCapitalize="characters"
            autoCorrect={false}
            blurOnSubmit={true}
            defaultValue="nneka@gmail.com"
            // maxLength={20}
            multiline={true}
            numberOfLines={2}
            selectionColor="green"
            textContentType="countryName"
            keyboardType="web-search"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
        />
        <TextInput
            placeholder="Password"
            placeholderTextColor="teal"
            // secureTextEntry={true}
            style={{ borderWidth: 1, borderColor: "#ccc", paddingHorizontal: 20, borderRadius: 7, paddingVertical: 10 }}
         />
      </View>
    );
  }
}

export default TextInputExample;
