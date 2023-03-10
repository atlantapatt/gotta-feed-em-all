import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import SinglePetCard from "./SinglePetCard"


function PetCard({pet, url, setUrl, petName}) {
   
    // let petName = url.split('/').pop()
    // console.log(petName)

    let history = useHistory()



    function routeChange() {
        history.push(url)
       
    }

   function URL() {
    setUrl(`/${pet.name}`)
    
   }


   

    return ( 
        <div className="pet-name">
            <p onMouseEnter={URL} onClick={routeChange}>{pet.name}</p>
            
        </div>
     );
}

export default PetCard;