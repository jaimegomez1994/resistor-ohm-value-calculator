import react from "react";


const Results = ({ results}) => {
   return <div className="main results">
       <div className='result'>
           <h4>Resistance</h4>
           <i>{results.resistance}</i>
       </div>
       <div className='result'>
            <h4>Tolerance</h4>
           <i>{results.tolerance}</i>
       </div>
       <div className='result'>
           <h4>Minimum</h4>
           <i>{results.minimum}</i>           
       </div>
       <div className='result'>
           <h4>Maximum</h4>
           <i>{results.maximum}</i>  
       </div>
   </div>
 }

export default Results;