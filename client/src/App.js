import './App.css';
import NavBar from './NavBar';
import Test from './Test';
import { Route, Switch, useHistory } from "react-router-dom"
import HomePage from './HomePage';
import { useEffect, useState } from 'react';
import Login from './LogInPage/Login';
import AddPet from './AddPet';

function App() {
  const [user, setUser] = useState(null)
  const [myPets, setMyPets] = useState([])
  const [newPet, setNewPet] = useState()
  
  
// console.log(pets)
  console.log(user)

  
    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        } else {
          return <Login setUser={setUser} />
        }
      });
    },[]);

    function handleAddPet(pet) {
      setMyPets([...myPets, pet])
      
    }
console.log(myPets)
    console.log(user)

  // require('react-dom');
  // window.React2 = require('react');
  // console.log(window.React1 === window.React2);

  if (!user) return <Login setUser={setUser} myPets={myPets} />


  return (
  <div>
    <NavBar setUser={setUser} user={user}  />
    <Switch>
      <Route exact path='/test'>
        <Test />
      </Route>
      <Route exact path='/'>
        <HomePage user={user} myPets={myPets} setMyPets={setMyPets}  />
      </Route>
      <Route exact path='/addpet'>
        <AddPet setNewPet={setNewPet} newPet={newPet} myPets={myPets} setMyPets={setMyPets} user={user} handleAddPet={handleAddPet} />
      </Route>
      <Route exact path='/login'>
        <Login setUser={setUser} />
      </Route>
    </Switch>
  </div>    
  );
}

export default App;
