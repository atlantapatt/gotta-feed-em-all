import { useState } from "react";

function Editing({user, setUser, setEditing}) {
    const [newUsername, setNewUsername]= useState(user.username)
    const [newName, setNewName]=  useState(user.name)
console.log(newName)
console.log(newUsername)

function handleSubmit(e) {
    e.preventDefault()
fetch(`/user/${user.id}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    username: newUsername,
    name: newName,
  }),
})
  .then((r) => r.json())
  .then((updatedUser) => setUser(updatedUser));
 setEditing(false)
  
}
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <lable>Enter New Username:</lable>
                <input value={newUsername} onChange={((e) => setNewUsername(e.target.value))} type='text'></input>
                <br></br>
                <lable>Change your name: </lable>
                <input value={newName} onChange={((e) => setNewName(e.target.value))} type='text'></input>
                <br></br>
                <button>Save</button>
            </form>
        </div>
     );
}

export default Editing;