import './App.css';
import NavBar from './NavBar';
import Test from './Test';
import { Route, Switch, useHistory } from "react-router-dom"
import HomePage from './HomePage';
import { useEffect, useState } from 'react';
import Login from './LogInPage/Login';
import AddPet from './AddPet';
import SinglePetCard from './SinglePetCard';
import FamilySignUp from './LogInPage/FamilySignUp';
import FamilyJoin from './LogInPage/FamilyJoin';

function App() {
  const [user, setUser] = useState(null)
  const [myPets, setMyPets] = useState([])
  const [newPet, setNewPet] = useState()
  const [url, setUrl] = useState('')
  const [family, setFamily] = useState()

  let petName = url.split('/').pop()
  
//finished family join start family create
//users in the same family don't have the same pets
//track user pets based on families?

  console.log(myPets)

 

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

    let onePet = myPets.find((pet) => {
      return pet.name == petName
  })
  console.log(onePet)

    // let singlepet = 
console.log(myPets)
    console.log(user)

    

  // require('react-dom');
  // window.React2 = require('react');
  // console.log(window.React1 === window.React2);

  if (!user) return <Login family={family} setFamily={setFamily} setUser={setUser} myPets={myPets} />


  return (
  <div>
    <NavBar setUrl={setUrl} setUser={setUser} user={user}  />
    <Switch>
      <Route exact path='/test'>
        <Test />
      </Route>
      <Route exact path='/'>
        <HomePage url={url} setUrl={setUrl} user={user} myPets={myPets} setMyPets={setMyPets}  />
      </Route>
      <Route exact path='/addpet'>
        <AddPet setNewPet={setNewPet} newPet={newPet} myPets={myPets} setMyPets={setMyPets} user={user} handleAddPet={handleAddPet} />
      </Route>
      <Route exact path='/login'>
        <Login setUser={setUser} />
      </Route>
      <Route exact path={url}>
        <SinglePetCard onePet={onePet}/>
      </Route>
      <Route exact path='/create'>
        <FamilySignUp />
      </Route>
      <Route exact path='/join'>
        <FamilyJoin />
      </Route>
    </Switch>
  </div>    
  );
}

export default App;
