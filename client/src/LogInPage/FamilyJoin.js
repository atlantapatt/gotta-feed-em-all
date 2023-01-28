import { useEffect } from "react";

function FamilyJoin({setSignUp, familyName, setFamilyName, familyPassword, setFamilyPassword, family, setFamily}) {
    
  
function fetchFamily(){
    
    fetch(`/family/${familyName}`).then((r) => {
                if (r.ok) {
                    r.json().then((family) => setFamily(family))
                }
            })
}


    function onSubmit() {
        setSignUp(false)
        fetchFamily()
    }

    console.log(family)

    return ( 
        
            <div className="existing-family">
                <p>Please enter your family name and password.</p>
                <form>
                    <label>Family Name</label>
                    <input id="family-name" type='text' value={familyName} onChange={(e) => setFamilyName(e.target.value)} ></input>
                    <br></br>
                    <label>Family Password</label>
                    <input id="family-password" type='text' value={familyPassword} onChange={(e) => setFamilyPassword(e.target.value)}></input>
                    <button onClick={(() => onSubmit())}>Submit</button>
                </form>
            </div>       
     );
}

export default FamilyJoin;