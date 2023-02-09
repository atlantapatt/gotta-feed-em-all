import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import SinglePetCard from "./SinglePetCard"


function PetCard({pet, url, setUrl, petName}) {
   
    // let petName = url.split('/').pop()
    // console.log(petName)

    let history = useHistory()
    console.log(url)
    console.log(pet.name)
    console.log(petName)

    function pushHistory(){
        history.push(url)
    }

    function routeChange() {
        history.push(url)
       
    }

   function URL() {
    setUrl(`/${pet.name}`)
    
   }

   function noURL() {
    setUrl("")
   }

   

    return ( 
        <div className="pet-name">
            <p onMouseEnter={URL} onClick={routeChange}>{pet.name}</p>
            
        </div>
     );
}

export default PetCard;