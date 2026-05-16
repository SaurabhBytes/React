import { useState } from "react";

function ConditionalRendering(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return(
        <div>
            {isLoggedIn ? <h1>Welcome back Saurabh!</h1>: <h1>Please login!</h1>}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn? 'Logout' : 'Login'}
            </button>
        </div>
    )
}

export default ConditionalRendering