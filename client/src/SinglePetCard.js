import { useEffect, useState } from "react";
import Schedules from "./Schedules";
import { useHistory} from "react-router-dom";
import './SinglePetCard.css'

function SinglePetCard({onePet, petSchedule, setPetSchedule, url, setUrl, handleAddSchedule}) {
    const [petName, setPetName] = useState()
    const [petType, setPetType] = useState()
    const [img, setImg] = useState()
    
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

      useEffect(() => {
        if (onePet !== undefined) {
            if (onePet.pet_type_id === 1) {
              fetch('https://dog.ceo/api/breeds/image/random').then((r) => {
                if(r.ok) {
                  r.json().then((img) => setImg(img.message))
                }
              })
            }
            if (onePet.pet_type_id === 2) {
              fetch('https://cataas.com/cat').then((r) => {
                if(r.ok) {
                  r.json().then((img) => setImg(img))
                }
              })
            }
            if (onePet.pet_type_id === 3) {
              fetch('https://randomfox.ca/floof/').then((r) => {
                if(r.ok) {
                  r.json().then((img) => setImg(img.image))
                }
              })
            }
        } 
      },[setPetType]);

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
      },[onePet]);
console.log(petSchedule)
    return ( 
      <div className="petcard">
        <button className='back-button' onClick={goHomeRoute}>Back</button>
        <div className="schedule-div">
            <div className="pet-info">
              <br></br>
              {petName}
              <br></br>
              {petType}
              <br></br>
              <img className="image" src={img} />
            </div>
            {/* <Schedules petName={petName} petSchedule={petSchedule} setPetSchedule={setPetSchedule} onePet={onePet} /> */}
            <Schedules setUrl={setUrl} url={url} onePet={onePet} petName={petName} petSchedule={petSchedule} setPetSchedule={setPetSchedule} />
        </div>
      </div>
     );
}

export default SinglePetCard;