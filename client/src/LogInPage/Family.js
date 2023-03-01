import { useState } from "react";
import FamilyJoin from "./FamilyJoin";
import FamilySignUp from "./FamilySignUp";

function Family({familyName, setFamilyName, isNewFamily, family, setFamily, setSignUp}) {
    
    const [familyPassword, setFamilyPassword] = useState('')
    
    return ( 
        <div>
            {isNewFamily ? <FamilySignUp setSignUp={setSignUp} family={family} setFamily={setFamily} familyPassword={familyPassword} setFamilyPassword={setFamilyPassword} setFamilyName={setFamilyName} familyName={familyName} /> : <FamilyJoin setSignUp={setSignUp} family={family} setFamily={setFamily} familyPassword={familyPassword} setFamilyPassword={setFamilyPassword} setFamilyName={setFamilyName} familyName={familyName} />}
        </div>
     );
}

export default Family;