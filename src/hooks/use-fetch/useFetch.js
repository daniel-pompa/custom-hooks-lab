import { useEffect, useState } from 'react';

/**
 * Custom hook for fetching data from a given URL.
 * @param {string} url - The URL to fetch data from.
 * @returns {Object} The fetch state and data.
 * @returns {any} data - The fetched data, or `null` if not yet fetched.
 * @returns {boolean} isLoading - Whether the data is still being loaded.
 * @returns {Error|null} error - The error if the fetch failed, or `null` if no error occurred.
 */
export const useFetch = url => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  /**
   * Fetch data from the provided URL and update the state accordingly.
   * Sets loading to true at the beginning, and handles setting data or error based on fetch result.
   */
  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    try {
      const response = await fetch(url);
      const data = await response.json();

      setState({
        data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
};
