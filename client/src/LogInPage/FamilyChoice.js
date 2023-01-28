import { useState } from "react"
import {useHistory } from "react-router-dom"
import Family from "./Family"
import FamilyButtons from "./FamilyButtons"
import FamilyJoin from "./FamilyJoin"
import FamilySignUp from "./FamilySignUp"
function FamilyChoice({setIsNewFamily, isNewFamily, setSignIn, family, setFamily, setSignUp}) {
    const [showChoice, setShowChoice] = useState(true)
    // maybe create back button
    const history = useHistory()
console.log(showChoice)
  


    return ( 
        
        <div>
            {showChoice ? <FamilyButtons  setShowChoice={setShowChoice} setIsNewFamily={setIsNewFamily} /> : <Family setSignUp={setSignUp} family={family} setFamily={setFamily} isNewFamily={isNewFamily}/>}
            <p onClick={() => setSignIn(false)}>Already a user? Click here.</p>
        </div>
     );
}

export default FamilyChoice;