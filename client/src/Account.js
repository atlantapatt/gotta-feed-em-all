import { useState } from "react";

function Account({user}) {
    const [editing, setEditing] = useState(false)
    return ( 
        <div className="account-div">
            <button onClick={(() => setEditing(true))}>Edit My Account</button>
           <p>{user.username}</p>
           <p>{user.name}</p>
        </div>
     );
}

export default Account;