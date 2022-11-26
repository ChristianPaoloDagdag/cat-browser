import React, { createContext, useMemo } from 'react';

export const Context = createContext();

export function ContextProvider(props) {
  const { children } = props;

  const contextValue = useMemo(() => ({ }), []);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
