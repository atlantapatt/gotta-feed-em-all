import { useState } from "react"
import { useHistory } from "react-router-dom"
import SinglePetCard from "./SinglePetCard"


function PetCard({pet, url, setUrl}) {
   
    // let petName = url.split('/').pop()
    // console.log(petName)

    let history = useHistory()

    function routeChange() {
        setUrl(`/${pet.name}`)
        console.log(url)
        history.push(url)
       
    }



    return ( 
        <div className="pet-name">
            <p onClick={routeChange}>{pet.name}</p>
        </div>
     );
}

export default PetCard;