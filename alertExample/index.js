import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';

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

class AlertExample extends Component {
    state = {
        text: ""
    }

    submit = () => {
        Alert.alert("Success", "Details saved successfully!!!",
        [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]
        )
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}> Working With Components </Text>
        <TextInput
            placeholder="Email address"
            placeholderTextColor="teal"
            // secureTextEntry={true}
            style={{ borderWidth: 1, borderColor: "#ccc", paddingHorizontal: 20, borderRadius: 7, paddingVertical: 10 }}
         />
        <Button title="Submit" onPress={this.submit} />
      </View>
    );
  }
}

export default AlertExample;
