import { createContext } from "react";

const UserContext = createContext({
    user: {
        name:'defaultName',
        email:'defaultEmail@gmail.com'
    }}
)
UserContext.displayName = 'UserContext'

export default UserContext