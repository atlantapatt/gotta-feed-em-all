import { useState } from "react"
import { useHistory } from "react-router-dom"
import SinglePetCard from "./SinglePetCard"


function PetCard({pet, url, setUrl}) {
   
    let petName = url.split('/').pop()
    // console.log(petName)

    let history = useHistory()

    function routeChange() {
        setUrl(`/${pet.name}`)
        console.log(url)
        history.push(url)
       
    }

    
    let onePet = [pet].filter((pet) => {
        return pet.name == petName
    })
console.log(onePet)
    // let mappingPet = [pet].map((pet) => {
    //     return (
    //         <SinglePetCard pet={pet} />
    //     )
    // })



    return ( 
        <div className="pet-name">
            <p onClick={routeChange}>{pet.name}</p>
        </div>
     );
}

export default PetCard;