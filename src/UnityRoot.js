import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

  const UnityRoot = () => {
    const [inputNumber, setInputNumber] = useState('');
    const [unityRoot, setUnityRoot] = useState(null);
  
    const calculateUnityRoot = () => {
      // Split the input into integer and decimal parts
      const [integerPart, decimalPart] = inputNumber.split('.');
  
      // Calculate the unity root for the integer part
      const integerDigits = integerPart.split('').map(Number);
      let result = integerDigits.reduce((acc, curr) => acc + curr, 0);
      
      while (result >= 10) {
        result = result
          .toString()
          .split('')
          .map(Number)
          .reduce((acc, curr) => acc + curr, 0);
      }
  
      // Add the unity root of the decimal part
      if (decimalPart) {
        const decimalDigits = decimalPart.split('').map(Number);
        const decimalRoot = decimalDigits.reduce((acc, curr) => acc + curr, 0);
        result += decimalRoot;
      }
  
      // Ensure the final result is between 0 and 9
      while (result >= 10) {
        result = result
          .toString()
          .split('')
          .map(Number)
          .reduce((acc, curr) => acc + curr, 0);
      }
  
      setUnityRoot(result);
    };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom style={{ color: 'black' }}>
        Unity Root Calculator
      </Typography>
      <TextField
        label="Enter a number"
        variant="outlined"
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
        placeholder="Enter a number"
        InputProps={{ style: { color: 'black' } }}
        style={{ marginBottom: '20px', marginRight: '10px' }}
      />
      <Button variant="contained" onClick={calculateUnityRoot}>
        Calculate Unity Root
      </Button>
      {inputNumber && unityRoot !== null && (
        <Typography variant="body1" style={{ marginTop: '20px', color: 'black' }}>
          Unity Root of {inputNumber} is: {unityRoot}
        </Typography>
      )}
    </div>
  );
};

export default UnityRoot;
