import { useState } from "react"

function SignUpBox({setSignIn, setUser, family, setFamily}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [name, setName] = useState("")
    const [click, setClick] = useState(false)
    


    
    
console.log(family)
console.log(click)

// function familySubmit(e) {
//     e.preventDefault()
//     if (click === false ) {
//         fetch(`/family/${familyName}`).then((response) => {
//             if (response.ok) {
//               response.json().then((family) => setFamily(family))
//             }
//         })
//     } else {
//         fetch("/family", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 last_name: familyName,
//                 password: familyPassword,
//             }),
//         }).then((r) => {
//             r.json().then((family) => setFamily(family))
//         })
//     }
// }


function signUp(e) {
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
                family_id: family.id,
            }),
        }).then((r) => {
            r.json().then((user) => setUser(user))
        })
}



    // function newFamily() {
    //     return (
    //         <div className="new-family">
    //             <label>Family Name</label>
    //             <input id="family-name" type='text' value={familyName} onChange={(e) => setFamilyName(e.target.value)} ></input>
    //             {/* needs password hash in backend */}
    //             <br></br>
    //             <label>Family Password</label>
    //             <input id="family-password" type='text' value={familyPassword} onChange={(e) => setFamilyPassword(e.target.value)}></input>
    //         </div>
    //     )
    // }


    return(
        <div className="login-form">
            <h4>Please Sign Up</h4>
            {/* <button onClick={getFamily}>TEST</button> */}
                <form onSubmit={signUp}>
                    <label>Username: </label>
                    <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/> <br></br>
                    <label>Password: </label>
                    <input id="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/> <br></br>
                    <label>Confirm Password: </label>
                    <input id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                    <br></br>
                    <label>Name: </label>
                    <input id="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <br></br>
                    {/* <label>Create New Family</label>
                    <input type='radio' checked={true === click} onChange={(() => setClick(!click))}></input>
                    <label>Join Existing Family</label>
                    <input type='radio' checked={false === click} onChange={(() => setClick(!click))}></input>
                    <br></br>
                    {click ? newFamily() : existingFamily()} */}
                    <button className="btn">Submit</button>
                    <p className="click" onClick={() => setSignIn(false)}>Already a user? Click here.</p>
                </form>
        </div> 
    )
}

export default SignUpBox