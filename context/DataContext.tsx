import React, {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { IData } from "../components/HomePage";

interface IDataContext {
  data: IData[] | [];
  setData: Dispatch<SetStateAction<[] | IData[]>>;
}

const DataContext = createContext<IDataContext>({
  data: [],
  setData: () => null,
});

const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const [data, setData] = useState<IData[] | []>([]);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
