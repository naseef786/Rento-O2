import React,{createContext,useState,useEffect} from "react";
import axios from "axios";

export const UserContext =createContext({})
export function UserContextProvider({children}){
   const [user,setUser] = useState(null)
  
   return(
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
   ) 
}