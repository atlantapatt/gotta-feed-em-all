import { useEffect, useState } from "react";
import PetCard from "./PetCard";
import './Home.css'
import SlideShow from "./SlideShow";

function HomePage({myPets, names, url, setUrl, familyNames}) {
  const [fact, setFact] = useState('A cat can jump up to seven times its height.')

    //fix so only account associeted pets show
    //Mochi Soba show for every account
let emptyArray = (myPets.length == 0)


useEffect(() => {
        fetch('https://dog-api.kinduff.com/api/facts?number=200').then((r) => {
          if(r.ok) {
            r.json().then((fact) => setFact(fact.facts[Math.floor(Math.random() * (200 - 1) + 1)]))
          }
        })

},[]);



    
  let mappedPets = myPets.map((pet) => {
    return(
      <PetCard pet={pet} url={url} setUrl={setUrl} />
    )
  }) 

 let noPets = <div className="no-pets"><p>Add a pet to get started!</p></div>
 console.log(fact)

    return (
        <div className="home-div">
          <div className="slideshow">
            <p>Our Pet Buddies!</p>
            <SlideShow />
          </div>
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