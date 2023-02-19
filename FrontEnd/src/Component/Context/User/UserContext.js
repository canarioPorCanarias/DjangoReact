import { createContext,useState } from "react";

export const UserContext = createContext({});
export  const UserProvider = ({ children }) => {

    const [userContext, setUserContext ] = useState(false);

    return(

        <UserContext.Provider value={{
            userContext,
            setUserContext
        }}> 

            {children}

        </UserContext.Provider>
    )
}