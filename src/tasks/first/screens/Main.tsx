import React, { useState } from 'react';
import { View } from 'react-native';
import Display from '../componentws/Display';
import DigitsAndOperaotors from '../componentws/DigitsAndOperaotors';

const Main: React.FC = () => {
  const [value, setValue] = useState<string>("");  // Holds the current string value to display
  const [firstValue, setFirstValue] = useState<string>(""); // State for the first value
  const [secondValue, setSecondValue] = useState<string>(""); // State for the second value
  const [action, setAction] = useState<string | null>(null); // State for the selected action
  const [hasError, setHasError] = useState<any>(0);
  const [dotUsed, setDotUsed] = useState(false);


  const handleDigitPress = (num: string) => {

    if (action === null) {
      setFirstValue((prev) => prev + num); // Update first value
    } else {
      setSecondValue((prev) => prev + num); // Update second value
    }
    setValue((prev) => prev + num); // Update the display
  };
  const handleDotPress = (num: string) => {
    if (!dotUsed) {
      setDotUsed(true)
    }
    if (dotUsed) return
    handleDigitPress('.')
  };

  const handleOperatorPress = (operator: string) => {
    if (firstValue) {
      if (dotUsed) setDotUsed(false)
      setAction(operator); // Set the current action
      setValue((prev) => prev + ` ${operator} `); // Update the display
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
        case "✕":
          result = firstNum * secondNum;
          break;
        case "÷":
          result = secondNum !== 0 ? firstNum / secondNum : NaN;
          break;
        default:
          result = 0;
      }

      setValue(result.toString()); // Display the result
      setFirstValue(result.toString()); // Store the result as the first value for future calculations
      setSecondValue(""); // Reset the second value
      setAction(null); // Reset the action
      setDotUsed(false)
    }
  };

  const handleClearPress = () => {
    setFirstValue("");
    setSecondValue("");
    setAction(null);
    setDotUsed(false)
    setValue("");
  };

  const handleAmPercentPress = () => {
    if (value) {
      const number = parseFloat(value); // Update the display
      const result = number / 100; // Calculate percentage
      setValue(result.toString()); // Update the display
    }
  };

  const handleIgnoreButtons = () => {
    // You can add specific functionality for other buttons here
  };

  return (
    <View style={{ width: '100%', height: '100%', justifyContent: 'flex-end' }}>
      <Display value={value} error={hasError} />
      <DigitsAndOperaotors
        handleDigitPress={handleDigitPress}
        handleOperatorPress={handleOperatorPress}
        handleClearPress={handleClearPress}
        handleResultPress={handleResultPress}
        handleAmPercentPress={handleAmPercentPress} // Pass the percentage function
        handleIgnoreButtons={handleIgnoreButtons}
        handleDotPress={handleDotPress}
      />
    </View>
  );
};

export default Main;
