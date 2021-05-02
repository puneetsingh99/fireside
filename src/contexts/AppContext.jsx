import { createContext } from "react";
import { initializeDb } from "../functions";

export const AppContext = createContext();

export const AppProvider = () => {
  const db = initializeDb();
};
