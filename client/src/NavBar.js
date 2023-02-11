import { useState } from "react";
import { useHistory} from "react-router-dom";
import './NavBar.css'


function NavBar({family, user, setUser,setUrl}) {

    const history = useHistory()

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => setUser(null));
        history.push('/')
      }


    function addPetRoute() {
        let path = '/addpet'
        history.push(path)
    }

    function goHomeRoute() {
        let path = '/'
        history.push(path)
        setUrl('/')
        
    }
    function myAccountRoute() {
        let account = '/user'
        history.push(account)
    }
    function familyLoad() {
        if (family !== null) {
            return (
                <p>You are part of the {family.last_name} family!</p>

            )
        }
    }
    return ( 
        <div className="nav">
            <div className="nav-items">
                <p>Welcome {user.name}!</p>
                {familyLoad()}
                <p onClick={goHomeRoute}>Logo</p>
                <p onClick={myAccountRoute}>My Account</p>
                <div className="button">
                    <button onClick={addPetRoute}>ADD PET</button>
                    <button onClick={handleLogout}>LOG OUT</button>
                </div>
            </div>
        </div>
     );
}

export default NavBar