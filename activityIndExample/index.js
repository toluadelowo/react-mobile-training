import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

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

class ActivityIndExample extends Component {
    state = {
        loading: true
    }

    componentDidMount() {
        setTimeout(this.stopLoading, 2000)
    }

    stopLoading = () => this.setState({ loading: false })

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}> Working With Components </Text>
        <ActivityIndicator
            animating={this.state.loading}
            color={"red"}
            size={"large"}
        />
      </View>
    );
  }
}

export default ActivityIndExample;
