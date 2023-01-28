import FamilyChoice from "./FamilyChoice";
import LogInBox from "./LogInBox";

function LoginChoice({setSignUp, signIn, setSignIn, family, setFamily, isNewFamily, setIsNewFamily, myPets, setUser}) {
    return ( 
        <div>
            {signIn ? <FamilyChoice setSignUp={setSignUp} family={family} setFamily={setFamily} isNewFamily={isNewFamily} setIsNewFamily={setIsNewFamily} setSignIn={setSignIn} /> : <LogInBox myPets={myPets} setUser={setUser} setSignIn={setSignIn} />}
        </div>
     );
}

export default LoginChoice;