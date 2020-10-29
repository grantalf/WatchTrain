import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import moment from 'moment';

const DATA = {
  timer: 1234567,
  laps: [12345, 2345, 2312, 39093]
}

function Timer({interval}) {
  const duration = moment.duration(interval);
  const centiseconds = Math.floor(duration.milliseconds() / 10);
  return (
    <Text style={styles.timer}>
      {duration.minutes()}:{duration.seconds()}.{centiseconds}
    </Text>
  )
}

function RoundButton({title, color, background}) {
  return (
    <View style={[styles.button, {backgroundColor: background}]}>
      <View style={styles.buttonBorder}>
      <Text style={[styles.buttonTitle, {color}]}>{title}</Text>
      </View>
    </View>
  )
}

function Lap({number, interval}) {
  return (
    <View style={styles.lap}>
      <Text style={styles.lapText}>Lap {number}</Text>
      <Text style={styles.lapText}>{interval}</Text>
    </View>
  )
}

function LapsTable({laps}) {
  return (
    <ScrollView style={styles.scrollView}>
      {laps.map((lap, index, key) => (
        <Lap
          key={laps.length - index}
          number={laps.length - index}
          interval={lap}
        />
      ))}
    </ScrollView>
  )
}

function ButtonsRow({children}) {
  return (
    <View style={styles.buttonsRow}>{children}</View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Timer interval={DATA.timer} />
      <ButtonsRow>
        <RoundButton title='Reset'color='#FFFFFF' background='#3D3D3D'/>
        <RoundButton title='Start'color='#50D167' background='#1B361F'/>
      </ButtonsRow>
      <LapsTable laps={DATA.laps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 130,
    paddingHorizontal: 30,
  },
  timer: {
    color: '#FFFFFF',
    fontSize: 76,
    fontWeight: '200'
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 19
  },
  buttonBorder: {
    width: 75,
    height: 75,
    borderRadius: 38,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 80,
  },
  lapText: {
    color: '#FFFFFF',
    fontSize: 19,
  },
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollView: {
    alignSelf: 'stretch',
    paddingTop: 20,
    paddingHorizontal: 15,
  }
});
