import { createContext, useContext } from 'react';

export const TreadingListContext = createContext();

export const useTreadingListContext = () => useContext(TreadingListContext);
