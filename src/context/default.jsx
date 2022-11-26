import React, { createContext, useMemo, useState } from 'react';

export const Context = createContext();

export function ContextProvider(props) {
  const { children } = props;

  const [breedList, setBreedList] = useState([]);
  const [selectBreed, setSelectBreed] = useState();

  const contextValue = useMemo(
    () => ({
      breedList,
      setBreedList,
      selectBreed,
      setSelectBreed,
    }),
    [breedList, setBreedList, selectBreed, setSelectBreed],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
