const CalculateOhms = (firstDigitValue, secondDigitValue, multiplierValue, toleranceValue) => {
    const resistance = parseInt(firstDigitValue.toString() + secondDigitValue.toString()) * multiplierValue;
    return {
      resistance: resistance,
      tolerance: `±${toleranceValue}%`,
      minimum: (resistance * (1 - (toleranceValue) * .01)).toFixed(5),
        maximum: (resistance * (1 + (toleranceValue) * .01)).toFixed(5)
    }
}
module.exports = CalculateOhms;