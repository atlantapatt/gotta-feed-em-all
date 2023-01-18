import { useHistory, useNavigate } from "react-router-dom";


function NavBar({user, setUser}) {
const history = useHistory()
// console.log(history)
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => setUser(null));
      }


    function routeChange() {
        console.log('changing route')
        // return <Redirect to='/addpet' />
    }
    return ( 
        <div>
            <div>
                <p>Welcome {user.name}!</p>
                <p>Logo</p>
                <p>My Account</p>
                <button onClick={routeChange}>ADD PET</button>
                <button onClick={handleLogout}>LOG OUT</button>
            </div>
        </div>
     );
}

export default NavBar