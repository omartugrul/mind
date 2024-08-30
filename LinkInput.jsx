import React, {useState} from "react";




//label = label of the text input
//placeholder = placeholder inside text box
//value = actual value inside the text box
//onChange = eventlistener that's waiting for the value to change
function LinkInput({label, placeholder, value, onChange}) { 

    const [inputValue, setInputValue] = useState(value || '');
    //initialize inputValue state and create mechanism to update using setInputValue

    //event handler for when input box changes
    const handleChange = (event) => {
        //using setter to set input value (which eventually gets set to value) to the current text field value 
        setInputValue(event.target.value);

        //checking if onChange is present, if it is, setting to 
        if (onChange) {
            onChange(event.target.value);
        }
    
    return (
        <div style={{ marginBottom: '1rem' }}>
            {label && <label>{label}</label>}
            <input
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
            style={{
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid #ccc',
                width: '100%',
            }}
            />
        </div>
    )
    
    
    };
}

export default TextInput;


/**
 * 
 * 
 * 
 * 
 * Text input function example

// TextInput.jsx
import React, { useState } from 'react';

function TextInput({ label, placeholder, value, onChange }) {
  // If you want to manage state within the component
  const [inputValue, setInputValue] = useState(value || '');

  // Handler for when the input changes
  const handleChange = (event) => {
    setInputValue(event.target.value);
    // If an onChange prop is passed, call it to update the parent component
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && <label>{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        style={{
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '100%',
        }}
      />
    </div>
  );
}

export default TextInput;

 */