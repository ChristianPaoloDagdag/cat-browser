import React, { createContext, useMemo, useState } from 'react';

export const Context = createContext();

export function ContextProvider(props) {
  const { children } = props;

  const [breedList, setBreedList] = useState([]);
  const [selectBreed, setSelectBreed] = useState('');
  const [alertBannerOpen, setAlertBannerOpen] = useState(false);

  const contextValue = useMemo(
    () => ({
      setSelectBreed,
      setBreedList,
      setAlertBannerOpen,
      selectBreed,
      breedList,
      alertBannerOpen,
    }),
    [breedList, setBreedList, selectBreed, setSelectBreed, alertBannerOpen, setAlertBannerOpen],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
