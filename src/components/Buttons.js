import react from "react";
import Button from '@material-ui/core/Button';


const Buttons = ({ handleSubmit, handleReset}) => {
   return <div className="main">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
        </Button>
        <Button variant="contained" color="secondary" onClick={handleReset}>
            Reset
        </Button>
   </div>
 }

export default Buttons;