import * as React from 'react';
import { StyleSheet } from 'react-native';

import CarDetailsInfo from '../components/CarDetailsInfo';
import { Text, View, Image } from '../components/Themed';

export default function TabOneScreen() {
  let image_source = '../assets/images/HondaAccord.jpeg'
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Honda Accord '97 1.8 iLS 116 HP</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image style= {{width: 400, height: 250}} source={require(image_source)}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <CarDetailsInfo carIndex={0}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
