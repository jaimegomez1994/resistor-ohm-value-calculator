import react from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const Multiplier = ({handler,multiplierValues, multiplierValue}) => {
   return <div>
      <InputLabel id="mutliplier-label">Multiplier</InputLabel>
      <Select
         labelId="mutliplier-label"
         id="mutliplier-select"
         value={multiplierValue.key} 
         onChange={handler}
         className="select"
      >
         {multiplierValues.map(multiplierValue => {
            return <MenuItem value={multiplierValue.key}>{multiplierValue.color}</MenuItem>
         })}
      </Select>
   </div>
 }

export default Multiplier;