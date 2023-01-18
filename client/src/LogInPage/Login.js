import { useState } from "react"
import LogInBox from "./LogInBox"
import SignUpBox from "./SignUpBox"
function Login({setUser}) {
const [signIn, setSignIn] = useState(false)
    
    return(
        <div className="login-div" >
            <header>WELCOME</header>
                <div className="login-box">
                    {signIn ? <SignUpBox setUser={setUser} setSignIn={setSignIn} /> : <LogInBox setUser={setUser} setSignIn={setSignIn} />}
                </div>
        </div>
    )
}

export default Login