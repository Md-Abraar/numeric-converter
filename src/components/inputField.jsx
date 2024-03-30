import React from 'react'

export default function InputField({label, id, inputType="text",value, validate, onChange}) {
  
  const handleChange = (e) => {
    let isValid = true;
    const newValue = e.target.value;
    if(!validate(newValue)){
      isValid = false;
    }
    onChange(newValue, id, isValid);
  };

  return (
    <div>
        <label htmlFor={id}>{label}:</label>
        <input type={inputType} className="p-2" id={id} value={value} placeholder="Enter" onChange={handleChange}></input>
    </div>
  )
}


