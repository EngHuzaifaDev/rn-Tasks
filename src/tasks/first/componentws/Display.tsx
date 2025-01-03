import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DisplayProps {
  value: string;
  error: boolean;
}


const Display: React.FC<DisplayProps> = ({ value, error }) => {
  return (
    <View style={styles.valueContainer}>
      {error ? (
        <Text style={styles.errorText}>Error</Text>
      ) : (
        <Text style={styles.valueText}>{value ? value : '0'}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  valueContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    height: 100,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  valueText: {
    fontSize: 36,
    color: 'black',
  },
  errorText: {
    fontSize: 36,
    color: 'red',
  },
});

export default Display;
