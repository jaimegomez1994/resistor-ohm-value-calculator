import react, { useState,useEffect } from "react";
import FirstDigit from "./FirstDigit"
import SecondDigit from "./SecondDigit";
import Multiplier from "./Multiplier";
import Tolerance from "./Tolerance";
import Results from './Results';

const Dropdowns = ({
    handlerFirstDigit,
    handlerSecondDigit,
    handlerMultiplier,
    handlerTolerance,
    firstDigitValues,
    firstDigitValue,
    secondDigitValue,
    multiplierValue,
    multiplierValues,
    toleranceValue,
    toleranceValues
}) => {
    

    return (
        <div className='main main2'>
            <FirstDigit
                handler={handlerFirstDigit}
                firstDigitValues={firstDigitValues}
                firstDigitValue={firstDigitValue}>
            </FirstDigit>
            <SecondDigit
                handler={handlerSecondDigit}
                secondDigitValues={firstDigitValues}
                secondDigitValue={secondDigitValue}>
            </SecondDigit>
            <Multiplier
                handler={handlerMultiplier}
                multiplierValues={multiplierValues}
                multiplierValue={multiplierValue}>
            </Multiplier>
            <Tolerance
                handler={handlerTolerance}
                toleranceValues={toleranceValues}
                toleranceValue={toleranceValue}>
            </Tolerance>
        </div>
    )
 }

export default Dropdowns;