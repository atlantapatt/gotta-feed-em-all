import { useEffect, useState } from "react";
import Schedules from "./Schedules";

function SinglePetCard({onePet, petSchedule, setPetSchedule}) {
    const [petName, setPetName] = useState()
    const [petType, setPetType] = useState()
    
//data sometimes doesn't load immediatly
    console.log(onePet)


    useEffect(() => {
        if (onePet !== undefined) {
          setPetName(onePet.name)
        } 
      },[onePet]);

      useEffect(() => {
        if (onePet !== undefined) {
            if (onePet.pet_type_id === 1) {
                setPetType('dog')
            }
            if (onePet.pet_type_id === 2) {
                setPetType('cat')
            }
            if (onePet.pet_type_id === 3) {
                setPetType('other')
            }
        } 
      },[onePet]);

    // function petType() {
    //     if (onePet.pet_type_id === 1) {
    //         return ("dog")
    //     }
    //     if (onePet.pet_type_id === 2) {
    //         return ("cat")
    //     }
    //     if (onePet.pet_type_id === 3) {
    //         return("other")
    //     }
    // }

    return ( 
        <div className="schedule-div">
            {petName}
            <br></br>
            {petType}
            <Schedules petName={petName} petSchedule={petSchedule} setPetSchedule={setPetSchedule} onePet={onePet} />
        </div>
     );
}

export default SinglePetCard;