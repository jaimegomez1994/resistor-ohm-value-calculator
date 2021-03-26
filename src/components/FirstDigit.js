import react from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const FirstDigit = ({handler,firstDigitValues, firstDigitValue}) => {
   return <div>
      <InputLabel id="first-digit-label">1st Digit</InputLabel>
      <Select
         labelId="first-digit-label"
         id="first-digit-select"
         value={firstDigitValue.key}
         onChange={handler}
         className="select"
      >
         {firstDigitValues.map(firstDigitValue => {
            return <MenuItem value={firstDigitValue.key}>{firstDigitValue.color}</MenuItem>
         })}
      </Select>
   </div>
 }

export default FirstDigit;