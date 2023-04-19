import { useEffect, useState } from 'react';

const useDebounce = (value, delay = 500) => {
  const [searchTerm, setSearchTerm] = useState(value);

  useEffect(() => {
    const getDelay = setTimeout(() => {
      console.log(`setting new timeout`);
      setSearchTerm(value);
    }, delay);

    return () => {
      console.log(`clearing the timeout`);
      clearTimeout(getDelay);
    };
  }, [value, delay]);

  return searchTerm;
};

export default useDebounce;
