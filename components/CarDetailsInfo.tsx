
import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import CarDetails from '../helpers/CarDetails'

import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function CarDetailsInfo({ carIndex }: { carIndex: number }) {
  const [myText, setMyText] = useState(CarDetails.getInstance().calculateLeftOilKm(carIndex));  
  
  return (
      <View>
        <Text style={styles.getStartedText}>Engine Oil</Text>
        <View style={styles.separator}/>
        <View style={[styles.getStartedContainer, styles.horizontalView]}>
          <View>
            <MonoText style={styles.labels}>Engine Oil Range</MonoText>
            <MonoText style={styles.labels}>Last Engine Oil Change</MonoText>
            <MonoText style={styles.labels}>Current dashboard</MonoText>
            <MonoText style={styles.labels}>Left Engine Oil </MonoText>
          </View>
        
        <View>
        <View style={[styles.codeHighlightContainer, styles.horizontalView]}>    
            <TextInput  style={styles.input} 
                        onChangeText={text => CarDetails.getInstance().setOilRangeKm(text, carIndex)} 
                        defaultValue={CarDetails.getInstance().carsState[carIndex].oil.oilRangeKm}/>
            <MonoText>km</MonoText>
          </View>

          <View style={[styles.codeHighlightContainer, styles.horizontalView]}>
            <TextInput  style={styles.input} 
                        onChangeText={text => CarDetails.getInstance().setLastOilChangeKm(text, carIndex)} 
                        defaultValue={CarDetails.getInstance().carsState[carIndex].oil.lastOilChangeKm}/>
            <MonoText>km</MonoText>
          </View>
          
          <View style={[styles.codeHighlightContainer, styles.horizontalView]}>
            <TextInput  style={styles.input} 
                        onChangeText={text => CarDetails.getInstance().setCurrentCarKm(text, carIndex)} 
                        defaultValue={CarDetails.getInstance().carsState[carIndex].oil.currentCarKm}/>
            <MonoText>km</MonoText>
          </View>

          <View style={[styles.codeHighlightContainer, styles.horizontalView]}>
            <TouchableOpacity style={styles.button} activeOpacity={0.95} onPress= {() => setMyText(CarDetails.getInstance().calculateLeftOilKm(carIndex))}>
              <MonoText style={styles.innerText}>{myText}</MonoText>
            </TouchableOpacity>
            <MonoText>km</MonoText>
          </View>
          </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    width: 58,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
  },
  labels: {
    height: 40,
    margin: 12,
    padding: 10,
  },
  button: {
    flexDirection: 'row', 
    width: 58,
    height: 40, 
    padding: 5,
    margin: 12,
    backgroundColor: '#03b1fc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerText: {
    color: 'white'
  },
  developmentModeText: {
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    borderColor: '#000080',
    borderWidth: 2,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 6,
  },
  getStartedText: {
    fontSize: 17,
    fontWeight: "bold",
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: '80%',
  }
});
