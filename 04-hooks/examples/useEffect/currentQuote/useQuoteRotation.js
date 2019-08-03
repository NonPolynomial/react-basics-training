// useQuoteRotation.js
import React, { useState, useEffect } from 'react';

const useQuoteRotation = ({ quotes, delay }) => {
  const [current, setNext] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const next = current + 1;
      setNext(quotes[next] ? next : 0);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [current, quotes]);

  return quotes[current];
};

export default useQuoteRotation;
