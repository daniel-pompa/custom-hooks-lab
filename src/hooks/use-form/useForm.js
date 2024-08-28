import { useState } from 'react';

/**
 * Custom hook for managing a form state.
 * @param {Object} [initialForm={}] - The initial state of the form fields.
 * @returns {Object} The form state and functions to manipulate it.
 * @returns {Object} formState - The current state of the form.
 * @returns {Function} onInputChange - Function to handle input changes and update the form state.
 * @returns {Function} onResetForm - Function to reset the form to its initial state.
 */
export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  /**
   * Handler for input changes. Updates the form state with the new input values.
   * @param {ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const onInputChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  /** Resets the form state to its initial values. */
  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    formState,
    onResetForm,
    onInputChange,
  };
};
