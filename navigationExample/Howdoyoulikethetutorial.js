import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'


class Howdoyoulikethetutorial extends Component {

    static navigationOptions = {
        title: "How do you like the tutorial",
        headerTintColor: "red"
    }

  render() {
      return (
      <View style={{ backgroundColor: "green", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 50 }}>Stack Navigator</Text>
         <Button
            title="Like It! Want more"
            color="#fff"
            onPress={() => this.props.navigation.navigate("LikeNow")}
         />
      </View>
    );
  }
}



export default Howdoyoulikethetutorial;
