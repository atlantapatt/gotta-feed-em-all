import FamilyChoice from "./FamilyChoice";
import LogInBox from "./LogInBox";

function LoginChoice({setSignUp, signIn, setSignIn, family, setFamily, setFamilyName, familyName, isNewFamily, setIsNewFamily, myPets, setUser, user}) {
    return ( 
        <div>
            {signIn ? <FamilyChoice familyName={familyName} setFamilyName={setFamilyName} setSignUp={setSignUp} family={family} setFamily={setFamily} isNewFamily={isNewFamily} setIsNewFamily={setIsNewFamily} setSignIn={setSignIn} /> : <LogInBox user={user} family={family} setFamily={setFamily} myPets={myPets} setUser={setUser} setSignIn={setSignIn} />}
        </div>
     );
}

export default LoginChoice;