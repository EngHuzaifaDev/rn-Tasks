import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';



const DigitsAndOperaotors = (props:any) => {

  
  return (
    <View style={styles.buttonsContainer}>
      {/* Row 1 of buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={()=>{props.handleButtonPress('C')}}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{props.handleButtonPress('+/-')}}>
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{props.handleButtonPress('%')}}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.lastButton]} onPress={()=>{props.handleButtonPress('÷')}}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>

      {/* Row 2 of buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => {props.handleButtonPress('7')}}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {props.handleButtonPress('8')}}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {props.handleButtonPress('9')}}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.lastButton]} onPress={() => props.handleButtonPress('✕')}>
          <Text style={styles.buttonText}>✕</Text>
        </TouchableOpacity>
      </View>

      {/* Row 3 of buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => {props.handleButtonPress('4')}}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{props.handleButtonPress('5')}}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{props.handleButtonPress('6')}}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.lastButton]} onPress={()=> {props.handleButtonPress('-')}}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      {/* Row 4 of buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={()=>{props.handleButtonPress('1')}}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{props.handleButtonPress('2')}}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{props.handleButtonPress('3')}}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.lastButton]} onPress={()=>{props.handleButtonPress('+')}}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Row 5 of buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={[styles.button, styles.zeroButton]} onPress={()=>{props.handleButtonPress('0')}}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{props.handleButtonPress('.')}}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.lastButton, styles.equalButton]} onPress={()=>{props.handleButtonPress('=')}}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 35,
  },
  buttonText: {
    fontSize: 24,
    color: 'black',
  },
  lastButton: {
    backgroundColor: '#f0a500', // Highlight color for the last button in the row
  },
  zeroButton: {
    width: 150, // Wider button for "0"
  },
  equalButton: {
    backgroundColor: '#f44336', // Equal sign button color
  },
});

export default DigitsAndOperaotors;
