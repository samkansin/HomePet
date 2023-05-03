import { useEffect, useState } from 'react';

const useDebounce = (value, delay = 500) => {
  const [searchTerm, setSearchTerm] = useState(value);

  useEffect(() => {
    const getDelay = setTimeout(() => {
      setSearchTerm(value);
    }, delay);

    return () => {
      clearTimeout(getDelay);
    };
  }, [value, delay]);

  return searchTerm;
};

export default useDebounce;
