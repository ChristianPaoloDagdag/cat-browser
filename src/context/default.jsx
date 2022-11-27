import React, { createContext, useMemo, useState } from 'react';

export const Context = createContext();

export function ContextProvider(props) {
  const { children } = props;

  const [breedList, setBreedList] = useState([]);
  const [selectBreed, setSelectBreed] = useState('');
  const [alertBannerOpen, setAlertBannerOpen] = useState(false);

  const contextValue = useMemo(
    () => ({
      alertBannerOpen,
      breedList,
      selectBreed,
      setAlertBannerOpen,
      setBreedList,
      setSelectBreed,
    }),
    [alertBannerOpen, breedList, selectBreed, setAlertBannerOpen, setBreedList, setSelectBreed],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
