import { useState } from 'react';

export default function useSynState(initialState) {
  const [state, updateState] = useState(initialState);

  let currentState = state;

  const get = () => currentState;

  const set = (newValue) => {
    currentState = newValue;
    updateState(newValue);
    return currentState;
  };

  return {
    get,
    set,
  };
}
