import { useState } from "react";
import FamilyJoin from "./FamilyJoin";
import FamilySignUp from "./FamilySignUp";

function Family({isNewFamily, family, setFamily, setSignUp}) {
    const [familyName, setFamilyName] = useState("")
    const [familyPassword, setFamilyPassword] = useState('')
    return ( 
        <div>
            {isNewFamily ? <FamilySignUp /> : <FamilyJoin setSignUp={setSignUp} family={family} setFamily={setFamily} familyPassword={familyPassword} setFamilyPassword={setFamilyPassword} setFamilyName={setFamilyName} familyName={familyName} />}
        </div>
     );
}

export default Family;