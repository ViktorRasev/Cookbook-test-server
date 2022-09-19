import { createContext} from "react";

const UserContext = createContext();

export function UserProvider({ children }) {

     const value = {
         isAuthorized: false,
        }
        
    return (
        <UserContext.Provider
            value={value}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;