import React from 'react';
import {View, Text} from 'react-native';
import Display from '../tasks/first/componentws/Display';
import Buttons from '../tasks/first/componentws/Buttons';
import {useState} from 'react';
import FirstTask from '../tasks/first/FirstTask';
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