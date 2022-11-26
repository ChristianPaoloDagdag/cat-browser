import React, { createContext, useMemo, useState } from 'react';

export const Context = createContext();

export function ContextProvider(props) {
  const { children } = props;

  const [breedList, setBreedList] = useState([123]);

  const contextValue = useMemo(
    () => ({ breedList, setBreedList }),
    [breedList, setBreedList],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
