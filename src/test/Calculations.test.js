const CalculateOhms = require('./../util/Calculations');

test('1st digit brown 1, 2nd digit black 0 , multiplier black 1, tolerance brown 1', () => {

  expect(CalculateOhms(1,0,1,1)).toStrictEqual({resistance: 10, tolerance: "±1%", minimum: "9.90000", maximum: "10.10000"});
});
test('1st digit red 2, 2nd digit red 2 , multiplier red 100, tolerance red 2', () => {

  expect(CalculateOhms(2,2,100,2)).toStrictEqual({resistance: 2200, tolerance: "±2%", minimum: "2156.00000", maximum: "2244.00000"});
});