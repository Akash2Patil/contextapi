import { createContext, useState } from "react";

export const UserContext = createContext();
const Context = (props) => {
    const [users, setusers] = useState([
        { id: 0, name: "Akash", city: "Dhule" },
        { id: 1, name: "Mayur", city: "Nandurbar" },
        { id: 2, name: "krishna", city: "jalgaon" }
    ])

    return (
        <UserContext.Provider value={{ users, setusers }}>
            {props.children}
        </UserContext.Provider>

    )

}

export default Context