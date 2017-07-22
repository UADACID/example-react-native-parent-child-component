/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from './component/button';

export default class TestingProps extends Component {

  constructor(){
    super()
    this.state = {
      number : 0
    }
  }

  onClickSetIncrement = (number) => {
    let newNumber = this.state.number
    newNumber += number
    this.setState({
      number : newNumber
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          This is example how to parent child component works
        </Text>
        <Button
          title = 'Add Increment'
          onPress = {this.onClickSetIncrement}
        />
        <Text style={styles.welcome}>
          {this.state.number}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestingProps', () => TestingProps);
