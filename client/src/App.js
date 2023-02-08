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
import AddSchedule from './AddSchedule';
import Account from './Account';

function App() {
  const [user, setUser] = useState(null)
  const [myPets, setMyPets] = useState([])
  const [newPet, setNewPet] = useState()
  const [url, setUrl] = useState('')
  const [family, setFamily] = useState([])
  const [familyName, setFamilyName] = useState("")
  const [petSchedule, setPetSchedule] = useState()
  const BASESCHEDULE = [{
    day: 1,
    AMorPM: 1, 
},
{
    day: 1,
    AMorPM: 2, 
},
{
    day: 2,
    AMorPM: 1, 
},
{
    day: 2,
    AMorPM: 2, 
},
{
    day: 3,
    AMorPM: 1, 
},
{
    day: 3,
    AMorPM: 2, 
},
{
    day: 4,
    AMorPM: 1, 
},
{
    day: 4,
    AMorPM: 2, 
},
{
    day: 5,
    AMorPM: 1, 
},
{
    day: 5,
    AMorPM: 2, 
},
{
    day: 6,
    AMorPM: 1, 
},
{
    day: 6,
    AMorPM: 2, 
},
{
    day: 7,
    AMorPM: 1, 
},
{
    day: 7,
    AMorPM: 2, 
}]
  //set state to have a week pet schedule with everything filled but the name and ped id as null


    function handleAddSchedule(schedule) {
      setPetSchedule([...petSchedule, schedule])
      }
      
        

  let petName = url.split('/').pop()
  console.log(url)
  
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

 

    function handleAddPet(pet) {
      setMyPets([...myPets, pet])
      
    }

    let onePet = myPets.find((pet) => {
      return pet.name == petName
  })
  

    // let singlepet = 
// console.log(myPets)
//     console.log(user)

    

  // require('react-dom');
  // window.React2 = require('react');
  // console.log(window.React1 === window.React2);

  if (!user) return <Login family={family} setFamily={setFamily} setUser={setUser} myPets={myPets} />


  return (
  <div>
    <NavBar family={family} setUrl={setUrl} setUser={setUser} user={user}  />
    <Switch>
      <Route exact path='/user'>
        <Account setUser={setUser} user={user} />
      </Route>
      <Route exact path='/test'>
        <Test myPets={myPets} setMyPets={setMyPets} petSchedule={petSchedule} setPetSchedule={setPetSchedule} />
      </Route>
      <Route exact path='/'>
        <HomePage  url={url} setUrl={setUrl} user={user} myPets={myPets} setMyPets={setMyPets}  />
      </Route>
      <Route exact path='/addpet'>
        <AddPet family={family} setNewPet={setNewPet} newPet={newPet} myPets={myPets} setMyPets={setMyPets} user={user} handleAddPet={handleAddPet} />
      </Route>
      <Route exact path='/login'>
        <Login setUser={setUser} />
      </Route>
      <Route exact path={url}>
        <SinglePetCard petSchedule={petSchedule} setPetSchedule={setPetSchedule} onePet={onePet}/>
      </Route>
      <Route exact path='/create'>
        <FamilySignUp />
      </Route>
      <Route exact path='/join'>
        <FamilyJoin />
      </Route>
      <Route exact path='/addschedule'>
        <AddSchedule handleAddSchedule={handleAddSchedule} user={user} family={family} url={url} onePet={onePet} />
      </Route>
      
    </Switch>
  </div>    
  );
}

export default App;
