import React from "react";

type ContextDataType = {
  files: File[];
  index: number;
};

type GlobalContextType = {
  data: ContextDataType;
  setData?: React.Dispatch<ContextDataType>;
};
const GlobalContext = React.createContext<GlobalContextType>({
  data: {
    files: [],
    index: 0,
  },
});

type Props = {
  children: JSX.Element;
};

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
