import React from "react";

export const Context: React.Context<any> = React.createContext({});

const UserProvider: React.FC = ({ children }) => {
    const [state, setState] = React.useState(undefined);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
}

export default UserProvider;
