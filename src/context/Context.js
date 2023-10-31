"use client"
import { createContext,useContext, useState } from "react";
const AppProvider = createContext();


export const AppContextProvider = ({children})=>{
    const [clicked,setClicked]= useState(true);
    return <AppProvider.Provider value={{clicked,setClicked}}>{children }</AppProvider.Provider>
}
export const Store = () => useContext(AppProvider);