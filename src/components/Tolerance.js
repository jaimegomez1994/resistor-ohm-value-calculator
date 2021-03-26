import react from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const Tolerance = ({handler,toleranceValues, toleranceValue}) => {
   return <div>
      <InputLabel id="mutliplier-label">Tolerance</InputLabel>
      <Select
         labelId="mutliplier-label"
         id="mutliplier-select"
         value={toleranceValue.key} 
         onChange={handler}
         className="select"
      >
         {toleranceValues.map(toleranceValue => {
            return <MenuItem value={toleranceValue.key}>{toleranceValue.color}</MenuItem>
         })}
      </Select>
   </div>
 }

export default Tolerance;