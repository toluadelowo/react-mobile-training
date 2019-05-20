import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';

class AnimatedExample extends Component {
    state = {
        backColor: new Animated.Value(0)
    }

    componentDidMount() {
        Animated.timing(
            this.state.backColor,
            {
              toValue: 300,
              duration: 5000
            },
          ).start();
          
    }

  render() {
    var color = this.state.backColor.interpolate({
        inputRange: [0, 300],
        outputRange: ['rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 1)']
    });

    return (
      <Animated.View style={{ 
          backgroundColor: color,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center' }}
        >
        <Text> Working with components </Text>
        <Text> Working with components </Text>

        <Text> Working with components </Text><Text> Working with components </Text><Text> Working with components </Text>
        v
        <Text> Working with components </Text><Text> Working with components </Text>
      </Animated.View>
    );
  }
}

export default AnimatedExample;
