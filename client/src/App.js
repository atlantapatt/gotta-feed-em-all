import './App.css';
import React, {useContext} from 'react';
import { UserContext } from './Context/UserContext';
import NavBar from './NavBar';
import Schedules from './Schedules';
import { Route, Switch, useHistory } from "react-router-dom"
import HomePage from './HomePage';
import { useEffect, useState } from 'react';
import Login from './LogInPage/Login';
import AddPet from './AddPet';
import SinglePetCard from './SinglePetCard';
import FamilySignUp from './LogInPage/FamilySignUp';
import FamilyJoin from './LogInPage/FamilyJoin';
import AddSchedule from './AddSchedule';
import Account from './Account';

function App() {
  // const [user, setUser] = useState(null)
  const [myPets, setMyPets] = useState([])
  const [newPet, setNewPet] = useState()
  const [url, setUrl] = useState('')
  const [family, setFamily] = useState([])
  const [familyName, setFamilyName] = useState("")
  const [petSchedule, setPetSchedule] = useState()
  const [names, setNames] = useState()
  const [familyNames, setFamilyNames] = useState()
  const [famErrors, setFamErrors] = useState([])

const {user, setUser} = useContext(UserContext)

  //set state to have a week pet schedule with everything filled but the name and ped id as null


    function handleAddSchedule(schedule) {
      setPetSchedule([...petSchedule, schedule])
      }
      
        console.log(petSchedule)

  let petName = url.split('/').pop()
  console.log(url)
  console.log(family)
  
//on refresh JSON error
//users in the same family don't have the same pets
//track user pets based on families?
//sometimes setFamily and setPets doesn't set on login

//in schedules.js
    //have onePet include schedules
    //two filters, one AM one PM
    //sort so that Monday is first and Sunday last
    //map filtered and sorted data into designated columns
    //names of assigned user gets displayed under day/time
    //when fed displayed user button gets color

    //can reset week button reset backend for multiple data

useEffect(() => {
  if (user !== null) {
  fetch(`/family/${user.family_id}`).then((r) => {
        if (r.ok) {
            r.json().then((family) => setFamily(family))
        }
    })  
  } else {
    return null
  }
},[user]);

//sometimes causes errors
    useEffect(() => {
        if (family !== null) {
          if (family.id !== undefined) {
          fetch(`/family/${family.id}/users`).then((r) => {
            if (r.ok) {
              r.json().then((user) => setNames(user))
            } else {
              console.log('errors')
              // r.json().then((err) => setFamErrors(err.errors))
            }
        })
      }
    }
      },[family]);



  useEffect(() => {
    if (user !== null) {
      fetch(`/family/${family.last_name}/pets`).then((response) => {
      if (response.ok) {
        response.json().then((pets) => setMyPets(pets))
      } else {
        return null
      }
    });
    } 
  },[family]);

console.log(myPets)
console.log(family)
console.log(user == null)


    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        } else {
          return <Login familyName={familyName} setFamilyName={setFamilyName} setUser={setUser} user={user} />
        }
      });
    },[]);


    useEffect(() => {
      if (names !== undefined) {
        setFamilyNames(names.map((users) => {
          return(
              <p>{users.name}</p>
          )
         }))
      } else {
          setFamilyNames('no other family members')
      }
    },[names]);

 

    function handleAddPet(pet) {
      setMyPets([...myPets, pet])
      
    }

    let onePet = myPets.find((pet) => {
      return pet.name == petName
  })
  

    // let singlepet = 
// console.log(myPets)
//     console.log(user)

    
console.log(familyName)
  // require('react-dom');
  // window.React2 = require('react');
  // console.log(window.React1 === window.React2);

if (!user) return <Login familyName={familyName} setFamilyName={setFamilyName} family={family} setFamily={setFamily} setUser={setUser} myPets={myPets} />

// console.log(setNewPet)

  return (
  <div>

      <NavBar handleAddPet={handleAddPet} setNewPet={setNewPet} family={family} setUrl={setUrl} setUser={setUser} user={user}  />
      <Switch>
        <Route exact path='/user'>
          <Account myPets={myPets} family={family} familyNames={familyNames} setUser={setUser} user={user} />
        </Route>
        <Route exact path='/schedules'>
          <Schedules url={url} petName={petName} myPets={myPets} setMyPets={setMyPets} petSchedule={petSchedule} setPetSchedule={setPetSchedule} />
        </Route>
        <Route exact path='/'>
          <HomePage familyNames={familyNames} names={names} url={url} setUrl={setUrl} user={user} myPets={myPets} setMyPets={setMyPets}  />
        </Route>
        <Route exact path='/addpet'>
          <AddPet family={family} setNewPet={setNewPet} newPet={newPet} myPets={myPets} setMyPets={setMyPets} user={user} handleAddPet={handleAddPet} />
        </Route>
        <Route exact path='/login'>
          <Login setFamilyName={setFamilyName} setUser={setUser} />
        </Route>
        <Route exact path={url}>
          <SinglePetCard handleAddSchedule={handleAddSchedule} setUrl={setUrl} url={url} petName={petName} petSchedule={petSchedule} setPetSchedule={setPetSchedule} onePet={onePet}/>
        </Route>
        <Route exact path='/create'>
          <FamilySignUp famErrors={famErrors} setFamErrors={setFamErrors}/>
        </Route>
        <Route exact path='/join'>
          <FamilyJoin setFamilyName={setFamilyName} />
        </Route>
        <Route exact path='/addschedule'>
          <AddSchedule familyNames={familyNames} setNames={setNames} names={names} handleAddSchedule={handleAddSchedule} user={user} family={family} url={url} onePet={onePet} />
        </Route>
      </Switch>
  </div>    
  );
}

export default App;
