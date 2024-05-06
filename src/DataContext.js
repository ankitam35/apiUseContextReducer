import { createContext, useReducer } from "react";

let initialState = {
  loading: true,
  data: [],
  error: "",
};

export const DataContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const reducerData = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={reducerData}>{children}</DataContext.Provider>
  );
};
