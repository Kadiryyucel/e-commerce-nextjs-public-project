'use client'

import React, { createContext, useContext, useReducer } from 'react';


const initialState = {
  productsLoading: false,
};


const ActionTypes = {
  SHOWLOADING: 'SHOWLOADİNG',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SHOWLOADING:
      return { ...state, productsLoading: state.loading };
    default:
      return state;
  }
};


const AppStateContext = createContext();
const AppDispatchContext = createContext();


export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};


export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};

export const useAppDispatch = () => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within an AppStateProvider');
  }
  return context;
};