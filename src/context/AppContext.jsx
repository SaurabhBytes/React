import { createContext, useState } from "react";

export const AppContext = createContext()

function AppContextProvider({children}){
    const [name, setName] = useState('Saurabh')
    const [balance, setBalance] = useState(10000)
    


    return(

        <AppContext.Provider value ={{name,balance,setBalance}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider