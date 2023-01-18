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
  console.log(user)

    // let history = useHistory()


    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
          console.log(user)
        } else {
          return <Login setUser={setUser} />
        }
      });
    }, []);

  // require('react-dom');
  // window.React2 = require('react');
  // console.log(window.React1 === window.React2);

  if (!user) return <Login setUser={setUser} />


  return (
  <div>
    <NavBar setUser={setUser} user={user} />
    <Switch>
      <Route exact path='/test'>
        <Test />
      </Route>
      <Route exact path='/'>
        <HomePage  />
      </Route>
      <Route exact path='/addpet'>
        <AddPet />
      </Route>
      <Route exact path='/login'>
        <Login setUser={setUser} />
      </Route>
    </Switch>
  </div>    
  );
}

export default App;
