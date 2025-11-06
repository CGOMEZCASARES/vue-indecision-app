import { expect, test, describe } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';


test('adds 1 + 2 to equal 3', () => {
  const a = 1;
  const b = 2;

  expect(sum(a, b)).toBe(a + b);
});


describe('addArray function tests', () => {
  test('empty array equal 0', () => {
    const a:number[] = [];

    expect(addArray(a)).toBe(0);
  });

  test('addArray runs propertly', () => {
    const a:number[] = [1, 2, 3, 4, 5];
    const result = 1 + 2 + 3 + 4 + 5;


    expect(addArray(a)).toBe(result);
  });

});

