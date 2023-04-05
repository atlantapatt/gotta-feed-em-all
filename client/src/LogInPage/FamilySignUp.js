import { useState } from 'react'
import './Family.css'
function FamilySignUp({setSignUp, familyName, setFamilyName, familyPassword, setFamilyPassword, family, setFamily}) {
    const [famErrors, setFamErrors] = useState([])

    function postFamily() {
        //add more into the form?
        fetch('/family', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                last_name: familyName,
                password: familyPassword,
            }),
        }).then((r) => {
            if (r.ok){
                 r.json().then((family) => setFamily(family))
            } else {
                r.json().then((error) => setFamErrors(error.errors))
            }
           
        })
    }
        function onSubmit() {
            setSignUp(false)
            postFamily()
        }

        let myErrors = famErrors.map((err) => {
            return(
              <p className="errors">{err}</p>
            )
          }) 
    return ( 
        <div>
            <div className="new-family">
                <p>Please create your family name and password.</p>
                <form className="form">
                    <label>Family Name: </label>
                    <input id="family-name" type='text' value={familyName} onChange={(e) => setFamilyName(e.target.value)} ></input>
                    <br></br>
                    <label>Family Password: </label>
                    <input id="family-password" type='text' value={familyPassword} onChange={(e) => setFamilyPassword(e.target.value)}></input>
                    <br></br>
                    <button className="btn" onClick={(() => onSubmit())}>Submit</button>
                    
                </form>
                <form className="error-form">
                    {myErrors}
                </form>
            </div>       
        </div>
     );
}

export default FamilySignUp;