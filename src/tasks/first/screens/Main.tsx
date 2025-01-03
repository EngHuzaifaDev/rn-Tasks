import React from 'react';
import { View, Text } from 'react-native';
import Display from '../componentws/Display';
import Buttons from '../componentws/Buttons';
import { useState } from 'react';


const Main: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [hasError, setHasError] = useState<boolean>(false);


  // 


  
  const handleButtonPress = (value: string): void => {
    // function body here
  }

  return (
    <View>
      <Display value={value} error={hasError} />
      <Buttons handleOnPress={handleButtonPress} />
    </View>
  )
}

export default Main