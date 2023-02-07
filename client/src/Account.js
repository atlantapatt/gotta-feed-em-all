import { useState } from "react";
import Editing from "./Editing";

function Account({user, setUser}) {
    const [editing, setEditing] = useState(false)
    return ( 
        <div className="account-div">
            <button onClick={(() => setEditing(true))}>Edit My Account</button>
           <button>Delete Account</button>
           <p>{user.username}</p>
           <p>{user.name}</p>
           {editing ? <Editing setEditing={setEditing} setUser={setUser} user={user} /> : null}
        </div>
     );
}

export default Account;