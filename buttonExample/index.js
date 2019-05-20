import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

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

class ButtonExample extends Component {
    state = {
        showDetails: false
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}> Working With Components </Text>
        {this.state.showDetails &&
            <Text> Thank you for the emails and InMails – we have them.
                I may be slow to get back but I want to use this medium to thank everyone ahead.
                To those that travelled from far to meet me which 
                unfortunately did not happen, I will make time to speak with all. 
            </Text>
        }

        <Button
            title="View Details"
            onPress={() => this.setState({ showDetails: !this.state.showDetails })}
            color="brown"
            disabled={true}
        />
      </View>
    );
  }
}

export default ButtonExample;
