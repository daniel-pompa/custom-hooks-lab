import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../use-counter/useCounter';

describe('useCounter Hook', () => {
  test('should initialize with default values', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;
    expect(counter).toBe(0);
    expect(increment).toBeInstanceOf(Function);
    expect(decrement).toBeInstanceOf(Function);
    expect(reset).toBeInstanceOf(Function);
  });

  test('should initialize with a custom value', () => {
    const { result } = renderHook(() => useCounter(10));
    const { counter } = result.current;
    expect(counter).toBe(10);
  });

  test('should increment the counter correctly', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;
    act(() => {
      increment();
      increment(2);
    });
    expect(result.current.counter).toBe(3);
  });

  test('should not decrement below zero', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;
    act(() => {
      decrement();
      decrement(2);
    });
    expect(result.current.counter).toBe(0);
  });

  test('should decrement the counter correctly', () => {
    const { result } = renderHook(() => useCounter(10));
    const { decrement } = result.current;
    act(() => {
      decrement();
      decrement(2);
    });
    expect(result.current.counter).toBe(7);
  });

  test('should increment and then decrement back to the initial value', () => {
    const { result } = renderHook(() => useCounter(10));
    const { increment, decrement } = result.current;
    act(() => {
      increment();
      decrement();
    });
    expect(result.current.counter).toBe(10);
  });

  test('should reset the counter to initial value', () => {
    const { result } = renderHook(() => useCounter());
    const { increment, reset } = result.current;
    act(() => {
      increment(10);
      reset();
    });
    expect(result.current.counter).toBe(0);
  });

  test('should handle reset correctly when counter is zero', () => {
    const { result } = renderHook(() => useCounter());
    const { reset } = result.current;
    act(() => {
      reset();
    });
    expect(result.current.counter).toBe(0);
  });
});
