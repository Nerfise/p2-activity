import React, { useState } from 'react';
import './App.css';

// Input field component
function InputField({ value, onChange }) {
  return (
    <input className="input-field" type="text" value={value} onChange={onChange} />
  );
}

// Button component
function OperationButton({ label, onClick }) {
  return (
    <button className="operation-button" onClick={onClick}>{label}</button>
  );
}

// Result component
function ResultDisplay({ result }) {
  return (
    <h1 className="result">{result}</h1>
  );
}

function App() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [result, setResult] = useState('');

  const handleValue1Change = (e) => {
    const newValue = e.target.value;
    if (/^-?\d*\.?\d*$/.test(newValue)) {
      setValue1(newValue);
    }
  };

  const handleValue2Change = (e) => {
    const newValue = e.target.value;
    if (/^-?\d*\.?\d*$/.test(newValue)) {
      setValue2(newValue);
    }
  };

  const handleAdd = () => {
    setResult(parseFloat(value1) + parseFloat(value2));
  };

  const handleSubtract = () => {
    setResult(parseFloat(value1) - parseFloat(value2));
  };

  const handleMultiply = () => {
    setResult(parseFloat(value1) * parseFloat(value2));
  };

  const handleDivide = () => {
    setResult(parseFloat(value1) / parseFloat(value2));
  };

  return (
    <div className="container">
      <h1>Simple Calculator</h1>
      <div className="input-container">
        <InputField value={value1} onChange={handleValue1Change} />
        <InputField value={value2} onChange={handleValue2Change} />
      </div>

      <div className="button-container">
        <OperationButton label="Add" onClick={handleAdd} />
        <OperationButton label="Subtract" onClick={handleSubtract} />
        <OperationButton label="Multiply" onClick={handleMultiply} />
        <OperationButton label="Divide" onClick={handleDivide} />
      </div>

      <ResultDisplay result={isNaN(result) ? '' : `Result: ${result}`} />
    </div>
  );
}

export default App;

