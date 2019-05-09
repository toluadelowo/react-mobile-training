import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'


class ReactNativeTutorials extends Component {

    static navigationOptions = {
        title: "React Native Tutorials",
        headerTintColor: "red"
    }

  render() {
      return (
      <View style={{ backgroundColor: "brown", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 50 }}>Stack Navigator</Text>
        <Button
            title="Like it! But later"
            color="#fff"
            onPress={() => this.props.navigation.navigate("LikeLater")}
         />
      </View>
    );
  }
}



export default ReactNativeTutorials;
