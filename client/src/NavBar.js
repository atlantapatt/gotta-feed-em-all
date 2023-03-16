import { useState } from "react";
import { useHistory} from "react-router-dom";
import AddPet from "./AddPet";
import DropdownMenu from "./DropdownMenu";
import './NavBar.css'

function NavBar({family, user, setUser,setUrl}) {
    const [open, setOpen] = useState(false)
    const [addingPet, setAddingPet] = useState(false)

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
        setOpen(false)
    }

    function goHomeRoute() {
        let path = '/'
        history.push(path)
        setUrl('/')
        setOpen(false)
        
    }
    function myAccountRoute() {
        let account = '/user'
        history.push(account)
        setOpen(false)
    }

    function pet() {
        setAddingPet(!addingPet)
        setOpen(false)
    }
    


    return ( 
        <div className="nav">
            <div className="nav-items">
                <p className="welcome">Welcome {user.name}!</p>
                <div className="img">
                    <img className="logo" onClick={goHomeRoute} src='./MUTT_NOODLE_thin.png' />
                </div>
                <div className="dropdown-trigger" onClick={() => {setOpen(!open)}}>
                    <i class="fa-solid fa-user"></i>
                </div>
                <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                    <ul>
                        <DropdownMenu icon='fa-regular fa-user' click={myAccountRoute} text='My Account' />
                        <DropdownMenu icon='fa-solid fa-dog' click={pet} text="Add Pet" />
                        <DropdownMenu icon='fa-solid fa-right-from-bracket' click={handleLogout} text='LogOut' />    
                    </ul>
                </div>
            </div>
            <div className={`add-pet ${addingPet ? 'active' : 'inactive'}`}>
                <AddPet pet={pet}/>
            </div>
        </div>
     );
}

export default NavBar