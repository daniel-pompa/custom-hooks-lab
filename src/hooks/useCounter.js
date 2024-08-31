import { useState } from 'react';

/**
 * Custom hook for managing a counter state.
 * @param {number} [initialValue=0] - The initial value for the counter.
 * @returns {Object} The counter state and functions to manipulate it.
 * @returns {number} counter - The current value of the counter.
 * @returns {Function} increment - Function to increment the counter by a specified value.
 * @returns {Function} decrement - Function to decrement the counter by a specified value.
 * @returns {Function} reset - Function to reset the counter to the initial value.
 */
export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  /**
   * Increment the counter by a specified value.
   * @param {number} [value=1] - The value to increment the counter by.
   */
  const increment = (value = 1) => {
    setCounter(prevCounter => prevCounter + value);
  };

  /**
   * Decrement the counter by a specified value.
   * If the counter is at zero, it does not decrement.
   * @param {number} [value=1] - The value to decrement the counter by.
   */
  const decrement = (value = 1) => {
    setCounter(prevCounter => {
      if (prevCounter === 0) return prevCounter;
      return prevCounter - value;
    });
  };

  /** Reset the counter to its initial value. */
  const reset = () => {
    setCounter(initialValue);
  };

  return { counter, increment, decrement, reset };
};
