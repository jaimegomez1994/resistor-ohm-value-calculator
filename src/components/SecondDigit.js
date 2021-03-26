import react from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const SecondDigit = ({handler,secondDigitValues, secondDigitValue}) => {
   return <div>
      <InputLabel id="second-digit-label">2nd Digit</InputLabel>
      <Select
         labelId="second-digit-label"
         id="second-digit-select"
         value={secondDigitValue.key}
         onChange={handler}
         className="select"
      >
         {secondDigitValues.map(secondDigitValue => {
            return <MenuItem value={secondDigitValue.key}>{secondDigitValue.color}</MenuItem>
         })}
      </Select>
   </div>
 }

export default SecondDigit;