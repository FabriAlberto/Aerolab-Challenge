import React, { createContext,useState } from "react";
import {postPoints } from "../API/Api";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
   const [products,setProducts]=useState([])
   const [user, setUser] = useState({})
   const [status, setStatus]=useState(false);
   const [history,setHistory]=useState([]);



   const addUser=(data)=>{
      setUser(data)
      
   }

    const handlePoints=()=>{
      postPoints(1000)
      .then((res)=>{ alert("se agregaron 1000 points") })
      .catch((err)=>{ console.log(err) })
   }
 
   return <UserContext.Provider value={{
      user,addUser,status,setStatus,setProducts,products,handlePoints,setUser,setHistory,history
   }}>
      {children};
   </UserContext.Provider>
}
export default UserContextProvider;