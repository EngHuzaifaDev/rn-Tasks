import React from 'react';
import {View, Text, StyleProp, ViewStyle} from 'react-native';

// Define the props type
type DisplayProps = {
  value: string; // Expecting a string value to display
  style?: StyleProp<ViewStyle>; // Optional style for customization
};

// Component definition
const Display: React.FC<DisplayProps> = ({value, style}) => {
  return (
    <View
      style={[
        {
          height: '25%',
          padding: 16,
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 15,
          marginBottom:45
        },
        style,
      ]}>
      <Text style={{fontSize:45}}>{value}</Text>
    </View>
  );
};

export default Display;
