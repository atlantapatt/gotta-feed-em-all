import { useState } from "react";
import Editing from "./Editing";
import Popup from "./Popup";
import './Account.css'

function Account({myPets, user, setUser, familyNames, family}) {
    const [isOpen, setIsOpen]= useState(false)
    const [editing, setEditing] = useState(false)

    function togglePopup() {
        setIsOpen(!isOpen)
    }

    let pets = myPets.map((pet) => {
        return (
            <p>{pet.name}</p>
        )
    })
    return ( 
        <div className="account-div">
            <div className="side-div">
                <div className="account-button" onClick={(() => setEditing(!editing))}>
                    <div className="edit" >
                        <i class="fa-solid fa-pen-to-square"></i>
                        <p>Edit My Account</p>
                    </div>
                    <div className="delete" onClick={togglePopup}>
                        <i class="fa-solid fa-square-minus"></i>
                        <p>DELETE ACCOUNT</p>
                    </div>
                </div>
            {isOpen ? <Popup togglePopup={togglePopup} /> : null }
                <div className="user-photo">
                    <i id="user" class="fa-solid fa-user"></i>
                </div>
                <div className="account-info">
                    <div className="account-user">
                        <p>Username: {user.username}</p>
                        <p>Name: {user.name}</p>
                    </div>
                </div> 
            </div>
                <div className="center-div">
                    <div className="account-family">
                        <p>You are part of the {family.last_name} family!</p>
                        <h4>Your Family:</h4>
                        {familyNames}
                    </div>
                    <div className="account-pets">
                        <h4>Your Pets:</h4>
                        {pets}
                    </div>
                </div>
               
             
           {editing ? <Editing setEditing={setEditing} setUser={setUser} user={user} /> : null}
        </div>
     );
}

export default Account;