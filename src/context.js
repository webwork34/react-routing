import React from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const cards = [
    { name: "card 1", id: 1 },
    { name: "card 2", id: 2 },
    { name: "card 3", id: 3 },
    { name: "card 4", id: 4 },
  ];

  return <Context.Provider value={{ cards }}>{children}</Context.Provider>;
};
