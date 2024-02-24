import { useState, useEffect } from 'react';

const useGetApi = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError('Oops something went wrong, please try again');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useGetApi;
