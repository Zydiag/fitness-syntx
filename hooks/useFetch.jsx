/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

export const useFetch = (apiPath, queryTerm="") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://exercisedb.p.rapidapi.com/${apiPath}?limt=10${queryTerm}`;

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        }
      });
      const result = await response.json();
      setData(result.results);
      setIsLoading(false);

      // try {
      //   setIsLoading(true);

      //   const response = await fetch(url);
      //   const result = await response.json();

      //   setData(result.results);
      //   setIsLoading(false);

      // } catch (error) {
      //   setIsLoading(false);
      //   setError(error);
      // }
    };

    fetchMovies();
  }, [url]);

  return { data, error, isLoading };
};
