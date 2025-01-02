import React from 'react';
import {View, Text} from 'react-native';
import Display from '../componentws/Display';
import Buttons from '../componentws/Buttons';
import {useState} from 'react';


const Main: React.FC = () => {
  const [value, setValue] = useState<string>("");
  return (
        <View>
          <Display value={value} />
          <Buttons setVal={setValue} />
        </View>
  )
}

export default Main