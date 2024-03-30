import { useState } from 'react';
import './App.css';
import InputField  from "./components/inputField";
import ErrorMsg  from "./components/errorMsg";
import * as conversions from "./utils/conversions";
import * as validations from "./utils/validations";

function App() {
  
  const [values, setValues] = useState({
    dec: "",
    bin: "",
    oct: "",
    hex: ""
  });
  const [isValidInput, setIsValidInput] = useState(true);

  const handleInputChange = (newValue, id, isValid) => {
    let updatedValues = { ...values };
    setIsValidInput(isValid);

    if(newValue === ""){
      updatedValues = {
        dec: "",
        bin: "",
        oct: "",
        hex: ""
      };
    }
    else{
      switch (id) {
        case "dec":
          updatedValues.dec = newValue;
          updatedValues.bin = conversions.decimalToBinary(newValue);
          updatedValues.oct = conversions.decimalToOctal(newValue);
          updatedValues.hex = conversions.decimalToHexadecimal(newValue);
          break;
        case "bin":
          updatedValues.dec = conversions.binaryToDecimal(newValue);
          updatedValues.bin = newValue;
          updatedValues.oct = conversions.decimalToOctal(updatedValues.dec);
          updatedValues.hex = conversions.decimalToHexadecimal(updatedValues.dec);
          break;
        case "oct":
          updatedValues.dec = conversions.octalToDecimal(newValue);
          updatedValues.bin = conversions.decimalToBinary(updatedValues.dec);
          updatedValues.oct = newValue;
          updatedValues.hex = conversions.decimalToHexadecimal(updatedValues.dec);
          break;
        case "hex":
          updatedValues.dec = conversions.hexadecimalToDecimal(newValue);
          updatedValues.bin = conversions.decimalToBinary(updatedValues.dec);
          updatedValues.oct = conversions.decimalToOctal(updatedValues.dec);
          updatedValues.hex = newValue;
          break;
        default:
          break;
      }
    
    }
    setValues(updatedValues);
  };
  

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="card">
            <div className="card-body my-3">
              <h3 className="text-center mb-4">Numeric converter</h3>
              <div className="row justify-content-center">
                <div className="col-md-5 m-2">
                  <InputField label="Decimal" id="dec" value={values.dec} validate={validations.validateDecimal} onChange={handleInputChange} />
                </div>
                <div className="col-md-5 m-2"><InputField label="Binary" id="bin" value={values.bin} validate={validations.validateBinary} onChange={handleInputChange} /></div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-5 m-2"><InputField label="Octal" id="oct" value={values.oct} validate={validations.validateOctal} onChange={handleInputChange} /></div>
                <div className="col-md-5 m-2"><InputField label="Hexadecimal" id="hex" value={values.hex} validate={validations.validateHexadecimal} onChange={handleInputChange} /></div>
              </div>
              <div className="row mt-4">
                {isValidInput ? "": <ErrorMsg />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
