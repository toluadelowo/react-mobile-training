import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

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

class SwitchExample extends Component {
    state = {
        on: false
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}> Working With Components </Text>
        <Switch
            trackColor={{
                false: "blue",
                true: "red"
            }}
            thumbColor={"gold"}
            disabled={true}
            value={this.state.on}
            onValueChange={() => this.setState({ on: !this.state.on })}
        />
      </View>
    );
  }
}

export default SwitchExample;
