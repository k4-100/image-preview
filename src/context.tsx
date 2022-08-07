import React from "react";

/**
 * type of "data" object used to store global state
 */
type ContextDataType = {
  files: File[];
  index: number;
};

/**
 * type of "data" and "setData" combo
 */
type GlobalContextType = {
  data: ContextDataType;
  setData?: React.Dispatch<ContextDataType>;
};

/**
 * initialised with some dummy data to meet requirements of typescript compiler
 */
const GlobalContext = React.createContext<GlobalContextType>({
  data: {
    files: [],
    index: 0,
  },
});

type Props = {
  children: JSX.Element;
};

/**
 * @param children every component inside
 * @returns wrapper for <App> granting access to global state "data" and its setter via useGlobalContext()
 */
const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = React.useState<ContextDataType>({
    files: [],
    index: 0,
  });
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => React.useContext(GlobalContext);

export { GlobalContextProvider, useGlobalContext };
