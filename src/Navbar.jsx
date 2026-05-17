import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function Navbar(){
    const {name, balance,setBalance} = useContext(AppContext)
    return(
        <div>
            <h1>Hello {name}</h1>
            <p>Balance: ${balance}</p>
            <button onClick={() => {setBalance (balance+ 1000)}}>Add more money </button>
        </div>
    )
}

export default Navbar