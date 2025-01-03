import React, { useState } from 'react';
import { View } from 'react-native';
import Display from '../componentws/Display';
import Contents  from '../componentws/utils/operations';  // Assuming this file is in the correct path
import DigitsAndOperaotors from '../componentws/ButtonsScreen';


const Main: React.FC = () => {
  const [value, setValue] = useState<string>("");  // Holds the current string value to display
  const [firstDigit, setFirstDigit] = useState<number | null>(null);  // First digit for calculation
  const [secondDigit, setSecondDigit] = useState<number | null>(null); // Second digit for calculation
  const [operator, setOperator] = useState<string | null>(null);  // Operator for calculation
  const [hasError, setHasError] = useState<boolean>(false);

  const handleButtonPress = (input: any) => {
    if (Contents.Digits.includes(input)) {
      // If the input is a digit, append it to the value
      setValue(prev => prev + input);
    } else if (Contents.Operators.includes(input)) {
      // If the input is an operator, handle accordingly
      if (input === "=") {
        // When "=" is pressed, calculate the result
        if (firstDigit !== null && secondDigit !== null && operator) {
          let result: number = 0;
          switch (operator) {
            case "+":
              result = firstDigit + secondDigit;
              break;
            case "-":
              result = firstDigit - secondDigit;
              break;
            case "✕":
              result = firstDigit * secondDigit;
              break;
            case "÷":
              if (secondDigit === 0) {
                setHasError(true);
                return;
              } else {
                result = firstDigit / secondDigit;
              }
              break;
          }
          setValue(result.toString());
          setFirstDigit(result);  // The result becomes the first digit for further calculations
          setSecondDigit(null);    // Reset second digit after calculation
          setOperator(null);       // Clear operator after calculation
        }
      } else {
        // If an operator other than "=" is pressed for the first time
        if (firstDigit === null) {
          setFirstDigit(Number(value));  // Convert the current string value to a number and store it
          setValue("");  // Reset value display after storing the first digit
        } else if (secondDigit === null) {
          setSecondDigit(Number(value));  // Set the second digit
          setValue("");  // Reset value display after setting second digit
        }
        setOperator(input);  // Set the operator
      }
    }
  };

  return (
    <View>
      <Display value={value} error={hasError} />
      <DigitsAndOperaotors handleButtonPress={handleButtonPress} />
    </View>
  );
};

export default Main;
