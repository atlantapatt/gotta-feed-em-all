import { useEffect, useState } from "react";
import Schedules from "./Schedules";
import Test from "./Test";
import { useHistory} from "react-router-dom";

function SinglePetCard({onePet, petSchedule, setPetSchedule, url, setUrl}) {
    const [petName, setPetName] = useState()
    const [petType, setPetType] = useState()
    const [loading, setLoading] = useState()
    
    const history = useHistory()
//data sometimes doesn't load immediatly
    console.log(onePet)
    console.log(petName)



    function goHomeRoute() {
        let path = '/'
        history.push(path)
        setUrl('/')
        setPetSchedule()
        
    }
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
    useEffect(() => {
        if (onePet !== undefined) {
          fetch(`/pet/${onePet.id}`).then((response) => {
          if (response.ok) {
            response.json().then((pet) => setPetSchedule(pet));
          } else {
            setUrl(url)
          }
        });
        } 
      },[setUrl]);

    return ( 
        <div className="schedule-div">
            <button onClick={goHomeRoute}>Back</button>
            <br></br>
            {petName}
            <br></br>
            {petType}
            {/* <Schedules petName={petName} petSchedule={petSchedule} setPetSchedule={setPetSchedule} onePet={onePet} /> */}
            <Test setUrl={setUrl} url={url} onePet={onePet} petName={petName} petSchedule={petSchedule} setPetSchedule={setPetSchedule} />
        </div>
     );
}

export default SinglePetCard;