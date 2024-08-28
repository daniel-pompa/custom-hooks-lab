import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from '../use-fetch/useFetch';

describe('useFetch Hook', () => {
  // Define URLs for testing single and multiple quotes
  const singleQuoteUrl = 'https://api.breakingbadquotes.xyz/v1/quotes';
  const multipleQuotesUrl = 'https://api.breakingbadquotes.xyz/v1/quotes/3';

  // Define mock data for single and multiple quotes
  const singleQuoteData = [
    { quote: "I'm not in danger, Skyler. I AM the danger!", author: 'Walter White' },
  ];

  const multipleQuotesData = [
    { quote: 'I hide in plain sight, same as you.', author: 'Gustavo Fring' },
    { quote: 'Some people are immune to good advice.', author: 'Saul Goodman' },
    { quote: "I'm a criminal", author: 'Jesse Pinkman' },
  ];

  // Reset any mocked functions after each test to avoid side effects
  afterEach(() => {
    jest.restoreAllMocks(); // Restore the mock after each test
  });

  test('should initialize with correct default state', () => {
    // Render the hook with the URL for a single quote
    const { result } = renderHook(() => useFetch(singleQuoteUrl));

    // Assert the initial state of the hook
    expect(result.current.data).toBeNull(); // Initially, there should be no data
    expect(result.current.isLoading).toBe(true); // Initially, loading should be true
    expect(result.current.error).toBeNull(); // Initially, there should be no error
  });

  test('should fetch a single quote successfully and update state', async () => {
    // Mock the global fetch function to return a resolved promise with singleQuoteData
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => singleQuoteData,
    });

    // Render the hook with the URL for a single quote
    const { result } = renderHook(() => useFetch(singleQuoteUrl));

    // Wait for the fetch operation to complete and check the result
    await waitFor(() => {
      expect(result.current.data).toEqual(singleQuoteData); // Data should match the mock data
      expect(result.current.isLoading).toBe(false); // Loading should be false once data is fetched
      expect(result.current.error).toBeNull(); // There should be no error
    });
  });

  test('should fetch multiple quotes successfully and update state', async () => {
    // Mock the global fetch function to return a resolved promise with multipleQuotesData
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => multipleQuotesData,
    });

    // Render the hook with the URL for multiple quotes
    const { result } = renderHook(() => useFetch(multipleQuotesUrl));

    // Wait for the fetch operation to complete and check the result
    await waitFor(() => {
      expect(result.current.data).toEqual(multipleQuotesData); // Data should match the mock data
      expect(result.current.isLoading).toBe(false); // Loading should be false once data is fetched
      expect(result.current.error).toBeNull(); // There should be no error
    });
  });

  test('should handle fetch error correctly', async () => {
    // Create a mock error to simulate a failed fetch
    const mockError = new Error('Failed to fetch data');
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(mockError);

    // Render the hook with the URL for a single quote
    const { result } = renderHook(() => useFetch(singleQuoteUrl));

    // Wait for the fetch operation to complete and check the result
    await waitFor(() => {
      expect(result.current.data).toBeNull(); // Data should be null due to the error
      expect(result.current.isLoading).toBe(false); // Loading should be false once error is handled
      expect(result.current.error).toBe(mockError); // Error should match the mock error
    });
  });

  test('should re-fetch data when URL changes', async () => {
    // Mock the fetch function to return different data based on URL
    const fetchMock = jest
      .spyOn(global, 'fetch')
      .mockResolvedValueOnce({ json: async () => singleQuoteData }) // Mock response for the first URL
      .mockResolvedValueOnce({ json: async () => multipleQuotesData }); // Mock response for the second URL

    // Render the hook with the initial URL
    const { result, rerender } = renderHook(({ url }) => useFetch(url), {
      initialProps: { url: singleQuoteUrl },
    });

    // Wait for the fetch operation to complete and check the result for the initial URL
    await waitFor(() => {
      expect(result.current.data).toEqual(singleQuoteData); // Data should match the mock data for the initial URL
      expect(result.current.isLoading).toBe(false); // Loading should be false once data is fetched
      expect(result.current.error).toBeNull(); // There should be no error
    });

    // Simulate a change in URL by re-rendering the hook with a new URL
    rerender({ url: multipleQuotesUrl });

    // Wait for the fetch operation to complete and check the result for the new URL
    await waitFor(() => {
      expect(result.current.data).toEqual(multipleQuotesData); // Data should match the mock data for the new URL
      expect(result.current.isLoading).toBe(false); // Loading should be false once data is fetched
      expect(result.current.error).toBeNull(); // There should be no error
    });

    // Restore the fetch mock to its original state
    fetchMock.mockRestore(); // Restore the mock after the test
  });
});
