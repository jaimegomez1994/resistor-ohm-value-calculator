import Dropdowns from './Dropdowns';
import Buttons from './Buttons';
import FirstDigits from  './../data/FirstDigits';
import Multipliers from './../data/Multipliers';
import Tolerance from './../data/Tolerance';
import Results from './Results';
import CalculateOhms from './../util/Calculations';
import react, { useState } from "react";


const Home = () => {
      const initialResultsValues = {
      maximum:0,
      minimum:0,
      resistance:0,
      tolerance:0,
  }
  
  const [results, setResults] = useState(initialResultsValues);

  const [firstDigitValue, setFirstDigitValue] = useState(FirstDigits[0])
  const [firstDigitValues, setFirstDigitValues] = useState(FirstDigits)

  const [secondDigitValue, setSecondDigitValue] = useState(FirstDigits[0])

  const [multiplierValue, setMultiplierValue] = useState(Multipliers[0])
  const [multiplierValues, setMultiplierValues] = useState(Multipliers)

  const [toleranceValue, setToleranceValue] = useState(Tolerance[0])
  const [toleranceValues, setToleranceValues] = useState(Tolerance)
  
  const handlerFirstDigit = (event) => {
    setFirstDigitValue(firstDigitValues[event.target.value-1]);
  }
  const handlerSecondDigit = (event) => {
    setSecondDigitValue(firstDigitValues[event.target.value-1]);
  }
  const handlerMultiplier = (event) => {
    setMultiplierValue(multiplierValues[event.target.value-1]);
  }
  const handlerTolerance = (event) => {
    setToleranceValue(toleranceValues[event.target.value-1]);
  }
  const handleSubmit = () => {
    setResults(CalculateOhms(firstDigitValue.value, secondDigitValue.value, multiplierValue.value, toleranceValue.value));
  }

  const handleReset = () => {
    setResults(initialResultsValues)
  }

  return (
    <>
      <h1>Resistor Ohm Value Calculator</h1>
        <Dropdowns
            handlerFirstDigit={handlerFirstDigit}
            handlerSecondDigit={handlerSecondDigit}
            handlerMultiplier={handlerMultiplier}
            handlerTolerance={handlerTolerance}
            firstDigitValues={firstDigitValues}
            firstDigitValue ={firstDigitValue}
            secondDigitValue={secondDigitValue}
            multiplierValue ={multiplierValue}
            multiplierValues={multiplierValues}
            toleranceValue ={toleranceValue}
            toleranceValues={toleranceValues}
        ></Dropdowns>
        <Buttons
            handleReset={handleReset}
            handleSubmit={handleSubmit}
        ></Buttons>
        <Results results={results}></Results>
    </>
  );
}

export default Home;