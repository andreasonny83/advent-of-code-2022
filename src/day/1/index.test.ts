import { returnMaxCals } from './index';

describe('day 1', () => {
  it.each([
    [['1', '2', '3', '', '4'], 6],
    [['1', '2', '3'], 6],
    [['1', '', '1', '2', '3', '', '5', '6', '', '10'], 11],
    [['1', '', '1', '2', '3', '', '5', '6', '', '12'], 12],
  ])("should return the maximum Elf's calories", (input, expected) => {
    const output = returnMaxCals(input);

    expect(output).toBe(expected);
  });
});
