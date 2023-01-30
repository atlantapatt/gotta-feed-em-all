import { useEffect, useState } from "react"

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
            r.json().then((user) => setUser(user))
        })
        
    }

    // function fetchFamily() {
    //     fetch(`/family/${famID}`).then((r) => {
    //         if (r.ok) {
    //             r.json().then((family) => setFamily(family))
    //         }
    //     })
    // }

// function handleSubmit() {
//     submitData()
//     fetchFamily()
// }


// onClick={(() => handleSubmit())}
    return (
        <div>
            <h4>Please Login</h4>
                <form onSubmit={submitData}>
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <label>Password</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button  >Submit</button>
                    <p onClick={() => setSignIn(true)}>Not a user? Click here to sign up.</p>
                </form>
        </div>        
    )
}

export default LogInBox