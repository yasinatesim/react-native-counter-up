import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CounterUp from './src/components/CounterUp';

const App = () => {
  return (
    <View style={styles.App}>
      <CounterUp />
    </View>
  );
};

const styles = StyleSheet.create({
  App: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
});

export default App;
