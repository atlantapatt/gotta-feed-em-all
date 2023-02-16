import { useEffect, useState } from "react";
import PetCard from "./PetCard";
import './Home.css'

function HomePage({myPets, names, url, setUrl}) {
  const [fact, setFact] = useState()
  const [familyNames, setFamilyNames] = useState()
    //fix so only account associeted pets show
    //Mochi Soba show for every account
let emptyArray = (myPets.length == 0)


useEffect(() => {
        fetch('https://dog-api.kinduff.com/api/facts?number=200').then((r) => {
          if(r.ok) {
            r.json().then((fact) => setFact(fact.facts[Math.floor(Math.random() * (200 - 1) + 1)]))
          }
        })

},[setUrl]);

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
    
  let mappedPets = myPets.map((pet) => {
    return(
      <PetCard pet={pet} url={url} setUrl={setUrl} />
    )
  }) 

 let noPets = <div className="no-pets"><p>Add a pet to get started!</p></div>
 
console.log(emptyArray)
// console.log(mappedPets)

    return (
        <div className="home-div">
          <div className="mypets">
            <h4>MY PETS</h4>
              {emptyArray ? noPets : mappedPets}
          </div>
          <div className="side">
            <div className="family">
              <h5>MY FAMILY:</h5>
              {familyNames}
            </div>  
            <div className="pet-facts">
              <h5>PET FACT:</h5>
              <p>{fact}</p>
            </div>
          </div>
        </div>
    )

}
export default HomePage