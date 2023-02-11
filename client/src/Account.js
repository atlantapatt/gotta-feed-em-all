import { useState } from "react";
import Editing from "./Editing";
import Popup from "./Popup";

function Account({user, setUser}) {
    const [isOpen, setIsOpen]= useState(false)
    const [editing, setEditing] = useState(false)

    function togglePopup() {
        setIsOpen(!isOpen)
    }
    return ( 
        <div className="account-div">
            <button onClick={(() => setEditing(true))}>Edit My Account</button>
           <button onClick={togglePopup}>Delete Account</button>
           {isOpen ? <Popup togglePopup={togglePopup} /> : null }
           <p>Username: {user.username}</p>
           <p>Name: {user.name}</p>
           {editing ? <Editing setEditing={setEditing} setUser={setUser} user={user} /> : null}
        </div>
     );
}

export default Account;