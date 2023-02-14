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
                <p className="family">You are part of the {family.last_name} family!</p>

            )
        }
    }
    return ( 
        <div className="nav">
            <div className="nav-items">
                <p className="welcome">Welcome {user.name}!</p>
                {familyLoad()}
                <div className="img">
                    <img className="logo" onClick={goHomeRoute} src='./MUTT_NOODLE_IMG.png' />
                </div>
                <p className="account" onClick={myAccountRoute}>My Account</p>
                <div className="button">
                    <button onClick={addPetRoute}>ADD PET</button>
                    <button className="logout" onClick={handleLogout}>LOG OUT</button>
                </div>
            </div>
        </div>
     );
}

export default NavBar