import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

type ButtonsProps = {
  setVal: React.Dispatch<React.SetStateAction<string>>;
};

const Buttons: React.FC<ButtonsProps> = ({ setVal }) => {
  const [firstValue, setFirstValue] = useState<string>(""); // State for the first value
  const [secondValue, setSecondValue] = useState<string>(""); // State for the second value
  const [action, setAction] = useState<string | null>(null); // State for the selected action

  const handleNumberPress = (num: string) => {
    if (action === null) {
      setFirstValue((prev) => prev + num); // Update first value
    } else {
      setSecondValue((prev) => prev + num); // Update second value
    }
    setVal((prev) => prev + num); // Update the display
  };

  const handleActionPress = (operator: string) => {
    if (firstValue) {
      setAction(operator); // Set the current action
      setVal((prev) => prev + ` ${operator} `); // Update the display
    }
  };

  const handleResultPress = () => {
    if (firstValue && secondValue && action) {
      const firstNum = parseFloat(firstValue);
      const secondNum = parseFloat(secondValue);

      let result: number;
      switch (action) {
        case "+":
          result = firstNum + secondNum;
          break;
        case "-":
          result = firstNum - secondNum;
          break;
        case "X":
          result = firstNum * secondNum;
          break;
        case "/":
          result = secondNum !== 0 ? firstNum / secondNum : NaN;
          break;
        default:
          result = 0;
      }

      setVal(result.toString()); // Display the result
      setFirstValue(result.toString()); // Store the result as the first value for future calculations
      setSecondValue(""); // Reset the second value
      setAction(null); // Reset the action
    }
  };

  const handleClearPress = () => {
    setFirstValue("");
    setSecondValue("");
    setAction(null);
    setVal("");
  };

  return (
    <View style={{ display: 'flex', justifyContent: 'space-between', height: '50%' }}>
      <View>
        <Button onPress={() => handleNumberPress("1")}>1</Button>
        <Button onPress={() => handleNumberPress("2")}>2</Button>
        <Button onPress={() => handleNumberPress("3")}>3</Button>
      </View>
      <View>
        <Button onPress={() => handleActionPress("+")}>+</Button>
        <Button onPress={() => handleActionPress("-")}>-</Button>
        <Button onPress={() => handleActionPress("X")}>X</Button>
        <Button onPress={handleResultPress}>=</Button>
      </View>
      <View>
        <Button onPress={handleClearPress}>Clear</Button>
      </View>
    </View>
  );
};

export default Buttons;
