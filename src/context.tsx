import React from "react";

type ContextDataType = {
  files: any;
};

type GlobalContextType = {
  data: ContextDataType;
  setData?: React.Dispatch<any>;
};
const GlobalContext = React.createContext<GlobalContextType>({
  data: {
    files: "",
  },
});

type Props = {
  children: JSX.Element;
};

const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = React.useState<ContextDataType>({ files: "data" });
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => React.useContext(GlobalContext);

export { GlobalContextProvider, useGlobalContext };
