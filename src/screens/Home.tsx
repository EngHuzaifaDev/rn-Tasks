import React from 'react';
import {View, Text} from 'react-native';
import Display from '../components/Display';
import Buttons from '../components/Buttons';
import {useState} from 'react';

const Home: React.FC = () => {
  const [value, setValue] = useState<string>("");
  
  return (
    <View>
      <Display value={value} />
      <Buttons setVal={setValue} />
    </View>
  );
};

export default Home;
