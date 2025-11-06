import { useCounter } from '@/composables/useCounter';
import { test, describe, expect } from 'vitest';

describe('useCounter', () => {
  test('initializes counter with default value', () => {
    const { counter, squareConuter } = useCounter();
    expect(counter.value).toBe(5);
    expect(squareConuter.value).toBe(25);
  });

  test('initializes counter with provided initial value', () => {
    const initialValue = 10;

    const { counter, squareConuter } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(squareConuter.value).toBe(initialValue * initialValue);
  });

  test('increments counter correctly', () => {
    const { counter, squareConuter } = useCounter();

    counter.value++;

    expect(counter.value).toBe(6);
    expect(squareConuter.value).toBe(36);
  });
});
