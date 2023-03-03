import { useEffect, useState } from "react";

function FamilyJoin({setSignUp, familyName, setFamilyName, familyPassword, setFamilyPassword, family, setFamily}) {
const [errors, setErrors] = useState([])
let myErrors 

function fetchFamily(e){
    e.preventDefault()
    fetch(`/families/${familyName}?last_name=${familyName}&password=${familyPassword}`).then((r) => {
                if (r.ok) {
                    r.json().then((family) => setFamily(family))
                    setSignUp(false)
                } else {
                    r.json().then((err) => setErrors(err.errors))
                }
            })
    
}


    function onSubmit() {
        fetchFamily()  
        // if (errors.length == 0) {
        //     setSignUp(false)
        // } else {
        //     console.log(errors)
        // }
    }
    
    function emptyErrors(errors) {
        if (errors !== undefined) {
            errors.map((err) => {
                return(
                  <p className="errors">{err}</p>
                )
              })
        }
    }
    console.log(errors)
    myErrors = errors.map((err) => {
        return(
          <p className="errors">{err}</p>
        )
      })
    console.log(myErrors)
    //   onClick={(() => fetchFamily())}
    return ( 
        
            <div className="existing-family">
                <p>Please enter your family name and password.</p>
                <form className="form" onSubmit={fetchFamily}>
                    <label>Family Name: </label>
                    <input id="family-name" type='text' value={familyName} onChange={(e) => setFamilyName(e.target.value)} ></input>
                    <br></br>
                    <label>Family Password: </label>
                    <input id="family-password" type='text' value={familyPassword} onChange={(e) => setFamilyPassword(e.target.value)}></input>
                    <br></br>
                    <button className="btn">Submit</button>
                </form>
                <form className="error-form">
                    {myErrors}
                </form>
            </div>       
     );
}

export default FamilyJoin;