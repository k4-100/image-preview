import React from "react";

type GlobalContextType = {
  data: any;
  setData?: React.Dispatch<any>;
};
const GlobalContext = React.createContext<GlobalContextType>({
  data: "",
});

type Props = {
  children: JSX.Element;
};

const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = React.useState<any>();
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => React.useContext(GlobalContext);

export { GlobalContextProvider, useGlobalContext };
