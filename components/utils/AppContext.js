import React, { useState, useContext } from "react";

const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const [speech, setSpeech] = useState(false);
  const [partyMode, setPartyMode] = useState(false);

  return (
    <AppContext.Provider value={{ partyMode, setPartyMode, speech, setSpeech }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContextConsumer = AppContext.Consumer;
export const useAppContext = () => useContext(AppContext);
