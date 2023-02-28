import { useEffect, useState } from "react"
import './LogInBox.css'

function LogInBox({setSignIn, user, setUser, family, setFamily}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [famID, setFamID] = useState()

    
    // set myFamily when loggin in
    //broken at prevent default
    //need to set famID to escape null/undefined

    function submitData(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        }).then((r) => {
            if (r.ok) {
               r.json().then((user) => setUser(user)) 
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
        
    }


let myErrors = errors.map((err) => {
    return(
      <p className="errors">{err}</p>
    )
  }) 

// onClick={(() => handleSubmit())}
//U: Test P: Test logs in but errors out?
    return (
        <div className="login-form">
            <h4>Please Login</h4>
                <form className="form" onSubmit={submitData}>
                    <div className="inputs">
                        <label>Username: </label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <br></br>
                        <label>Password: </label>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <br></br>
                    </div>
                    <button className="btn">Submit</button>
                    <form className="error-form">
                    {myErrors}
                    </form>
                    <p className="click" onClick={() => setSignIn(true)}>Not a user? Click here to sign up.</p>
                </form>
        </div>        
    )
}

export default LogInBox