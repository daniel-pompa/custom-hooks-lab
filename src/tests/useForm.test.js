import { act, renderHook } from '@testing-library/react';
import { useForm } from '../hooks';

describe('useForm Hook', () => {
  const initialForm = {
    name: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
  };

  test('should initialize form with provided initial values', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { formState, onInputChange, onResetForm } = result.current;
    expect(formState).toEqual(initialForm);
    expect(onInputChange).toBeInstanceOf(Function);
    expect(onResetForm).toBeInstanceOf(Function);
  });

  test('should initialize form with an empty object if no initial values are provided', () => {
    const { result } = renderHook(() => useForm());
    expect(result.current.formState).toEqual({});
  });

  test('should update form state when onInputChange is called', () => {
    const newName = 'Daniel';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newName,
        },
      });
    });
    expect(result.current.formState.name).toBe(newName);
  });

  test('should update form state when multiple onInputChange calls are made', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    // Update first field
    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: 'Daniel',
        },
      });
    });

    // Verify first update
    expect(result.current.formState.name).toBe('Daniel');

    // Update second field
    act(() => {
      onInputChange({
        target: {
          name: 'lastName',
          value: 'Pompa',
        },
      });
    });

    // Verify second update
    expect(result.current.formState.lastName).toBe('Pompa');
  });

  test('should reset form state to initial values when onResetForm is called', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onResetForm } = result.current;
    act(() => {
      onResetForm();
    });
    expect(result.current.formState).toEqual(initialForm);
  });
});
