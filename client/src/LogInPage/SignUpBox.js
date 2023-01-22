import { useState } from "react"

function SignUpBox({setSignIn, setUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])
    


    function onSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                name,
                password_confirmation: passwordConfirmation,
                family_id: 1,
            }),
        }).then((r) => {
            r.json().then((user) => setUser(user))
        })
    }

    return(
        <div>
            <h4>Please Sign Up</h4>
                <form onSubmit={onSubmit}>
                    <label>Username</label>
                    <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/> <br></br>
                    <label>Password</label>
                    <input id="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/> <br></br>
                    <label>Confirm Password</label>
                    <input id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                    <br></br>
                    <label>Name</label>
                    <input id="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <button>Submit</button>
                    <p onClick={() => setSignIn(false)}>Already a user? Click here.</p>
                </form>
        </div> 
    )
}

export default SignUpBox