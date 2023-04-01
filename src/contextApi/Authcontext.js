import React, { createContext } from 'react';
export const  myContext = createContext()
const Authcontext = ({children }) => {
   const test = "tanzil"
    const contextValue = {
        test
    }
    return (
        <myContext.Provider value = {contextValue}> {children} </myContext.Provider>
    );
};

export default Authcontext;