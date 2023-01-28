import { useState } from "react"
import FamilyChoice from "./FamilyChoice"
import LogInBox from "./LogInBox"
import LoginChoice from "./LoginChoice"
import SignUpBox from "./SignUpBox"
function Login({user, setUser, myPets, family, setFamily, familyName, setFamilyName}) {
const [signUp, setSignUp] = useState(true)

const [signIn, setSignIn] = useState(false)
const [isNewFamily , setIsNewFamily] = useState(null)
//  <LogInBox myPets={myPets} setUser={setUser} setSignIn={setSignIn} />
/*  */
console.log(signIn)
    return(
        <div className="login-div" >
            <header>WELCOME</header>
                <div className="login-box">
                    {/* {signIn ? <FamilyChoice family={family} setFamily={setFamily} isNewFamily={isNewFamily} setIsNewFamily={setIsNewFamily} setSignIn={setSignIn} /> : <LogInBox myPets={myPets} setUser={setUser} setSignIn={setSignIn} />} */}
                    {signUp ? <LoginChoice user={user} familyName={familyName} setFamilyName={setFamilyName} signIn={signIn} family={family} setFamily={setFamily} isNewFamily={isNewFamily} setIsNewFamily={setIsNewFamily} setSignIn={setSignIn}  setSignUp={setSignUp} signUp={signUp} myPets={myPets} setUser={setUser} /> : <SignUpBox myPets={myPets} setUser={setUser} setSignIn={setSignIn} family={family} />}
                </div>
        </div>
    )
}

export default Login