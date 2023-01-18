import { useState } from "react"

function LogInBox({setSignIn, setUser}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // console.log(errors)

    function handleSubmit(e) {
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
            r.json().then((user) => setUser(user))
        })
    }


    return (
        <div>
            <h4>Please Login</h4>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <label>Password</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button >Submit</button>
                    <p onClick={() => setSignIn(true)}>Not a user? Click here to sign up.</p>
                </form>
        </div>        
    )
}

export default LogInBox