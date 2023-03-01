import { useState } from "react"
import LogInBox from "./LogInBox"
import LoginChoice from "./LoginChoice"
import SignUpBox from "./SignUpBox"
import './Login.css'
function Login({user, setUser, myPets, family, setFamily, familyName, setFamilyName}) {
const [signUp, setSignUp] = useState(true)
const [signIn, setSignIn] = useState(false)
const [isNewFamily , setIsNewFamily] = useState(null)

console.log(familyName)

    return(
        <div className="login-div" >
            <header>WELCOME</header>
            <img className="mutt-noodle" src="./MUTT_NOODLE.png" />
                <div className="login-box">
                    {signUp ? <LoginChoice user={user} familyName={familyName} setFamilyName={setFamilyName} signIn={signIn} family={family} setFamily={setFamily} isNewFamily={isNewFamily} setIsNewFamily={setIsNewFamily} setSignIn={setSignIn}  setSignUp={setSignUp} signUp={signUp} myPets={myPets} setUser={setUser} /> : <SignUpBox myPets={myPets} setUser={setUser} setSignIn={setSignIn} family={family} />}
                </div>
        </div>
    )
}

export default Login