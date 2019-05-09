import React from 'react';
import { TabNav } from './src/navigation/tab';
import StackNav from './src/navigation/stack';

export default class App extends React.Component {
  render() {
    return (
      // <StackNav />
      <TabNav />
    );
  }
}
