import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

class CounterUp extends Component {
  constructor() {
    super();

    this.state = {
      counter: 1,
    };
  }

  increase = () => {
    const {counter} = this.state;
    this.setState({counter: counter + 1});
  };

  decrease = () => {
    const {counter} = this.state;
    this.setState({counter: counter - 1});
  };

  reset = () => {
    this.setState({counter: 0});
  };

  render() {
    const {counter} = this.state;
    return (
      <View>
        <SafeAreaView>
          <View style={styles.Card}>
            <View style={styles.CardTitle}>
              <Text style={styles.CardTitleText}>Counter Up App</Text>
            </View>
            <View style={styles.CardBody}>
              <TouchableOpacity
                style={[styles.Btn, styles.BtnGray]}
                onPress={this.decrease}>
                <Text style={styles.BtnText}>-</Text>
              </TouchableOpacity>
              <View style={styles.CardContent}>
                <Text style={styles.CardContentText}>{counter}</Text>
              </View>
              <TouchableOpacity
                style={[styles.Btn, styles.BtnRed]}
                onPress={this.increase}>
                <Text style={styles.BtnText}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[styles.Btn, styles.BtnGradient]}
              onPress={this.reset}>
              <Text style={styles.BtnText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Card: {
    fontSize: 16,
    paddingBottom: 5,
    marginBottom: 15,
  },
  CardTitle: {
    borderBottomWidth: 2,
    borderBottomColor: '#cfcfcf',
    paddingBottom: 5,
    marginBottom: 15,
  },
  CardTitleText: {
    textAlign: 'center',
  },
  CardBody: {
    flexDirection: 'row',
  },
  CardContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardContentText: {
    paddingHorizontal: 15,
  },
  Btn: {
    fontSize: 18,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  BtnRed: {
    backgroundColor: '#ff5063',
  },
  BtnGray: {
    backgroundColor: '#cfcfcf',
  },
  BtnGradient: {
    backgroundColor: '#ff5063',
    marginTop: 15,
  },
  BtnText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default CounterUp;
