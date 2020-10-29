import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

const DATA = {
  timer: 1234567,
  laps: [12345, 2345, 2312, 39093]
}

function Timer({interval}) {
  const duration = moment.duration(interval);
  return (
    <Text style={styles.timer}>
      {duration.minutes()}:{duration.seconds()}.{duration.milliseconds()}
    </Text>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Timer interval={DATA.timer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 130,
  },
  timer: {
    color: '#FFFFFF',
    fontSize: 76,
    fontWeight: '200'
  }
});
