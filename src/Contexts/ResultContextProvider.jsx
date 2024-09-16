import { createContext, useContext, useState } from "react";



const ResultContext = createContext();

export const ResultContextProvider = ({children}) => {
    
    const [sidIsOpen , setSidIsOpen] = useState(true);

    return(
      <ResultContext.Provider
      value={{sidIsOpen , setSidIsOpen}}
      >
        {children}
      </ResultContext.Provider>
    )
}


export const useResultContext = () => useContext(ResultContext);