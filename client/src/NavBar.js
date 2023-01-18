import { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";


function NavBar({user, setUser}) {
    
const history = useHistory()
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => setUser(null));
      }


    function addPetRoute() {
        let path = '/addpet'
        history.push(path)
    }

    function goHomeRoute() {
        let path = '/'
        history.push(path)
    }
    return ( 
        <div>
            <div>
                <p>Welcome {user.name}!</p>
                <p onClick={goHomeRoute}>Logo</p>
                <p>My Account</p>
                <button onClick={addPetRoute}>ADD PET</button>
                <button onClick={handleLogout}>LOG OUT</button>
            </div>
        </div>
     );
}

export default NavBar