import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
function Schedules({onePet, petSchedule, setPetSchedule, petName}) {
    const [sortPet, setSortPet] = useState()
    const [petAM, setPetAM] = useState()
    const [am, setAM] = useState([])
    const [petPM, setPetPM] = useState()
    const [mapAM, setMapAM] = useState()
    const [mapPM, setMapPM] = useState()
    const [monday, setMonday] = useState()
    const [testSchedule, setTestSchedule]= useState()
    //map fetched schedules into columns
    const history = useHistory()
   
    console.log(petSchedule)


    function routeChange() {
        let path = '/addschedule'
        history.push(path)
    }

    useEffect(() => {
        if (onePet !== undefined) {
          fetch(`/pet/${onePet.id}`).then((response) => {
          if (response.ok) {
            response.json().then((pet) => setPetSchedule(pet));
          } else {
            return null
          }
        });
        } 
      },[]);

      console.log(petSchedule)

    //   let filterSchedule = petSchedule.filter(pet => {
    //     for (let i=1; i<8; i++) {
    //         if (pet.day == i) {
    //             return pet
    //         }
    //     }
    //   })
      useEffect(() => {
        if (sortPet !== undefined) {
            setPetAM(sortPet.filter(pet => {
                            if (pet.AMorPM == 1) {
                                return pet
                            }
                        }))
        } else {
            console.log("no AM pets")
        }
      },[sortPet]);
console.log(petAM)

   
useEffect(() => {
    if (sortPet !== undefined) {
        setPetPM(sortPet.filter(pet => {
                        if (pet.AMorPM == 2) {
                            return pet
                        }
                    }))
    } else {
        console.log("no PM pets")
    }
  },[sortPet]);
  console.log(petPM)

  useEffect(() => {
    if (petAM !== undefined) {
    petAM.forEach(element => {
        for (let i=0; i<8; i++) {
            if (element.day === i) {
                setAM([...am, element])
            }
        }
    });
    }},[petAM])
    console.log(am)

  useEffect(() => {
    if (am !== undefined) {
      setMapAM(am.map((schedule) => {
        return(
            <td>{schedule.user}</td>
        )
       }))
    } else {
        console.log("no AM schedules")
    }
  },[am]);

  useEffect(() => {
    if (petPM !== undefined) {
      setMapPM(petPM.map((schedule) => {
        return(
            <td>{schedule.user}</td>
        )
       }))
    } else {
        console.log("no PM schedules")
    }
  },[petPM]);


 
useEffect(() => {
    if (petSchedule !== undefined) {
            setSortPet(petSchedule.sort((a, b) => a.day - b.day))
    } else {
            console.log("no pets")
    }
},[petSchedule]);

// useEffect(() => {
//     if (petSchedule !== undefined) {
//         petSchedule.filter(pet => {
//             for (let i=1; i<8; i++) {
//                 if (pet.day == i) {
//                     console.log(pet)
//                 }
//             }
//           })
//     }
// },[petSchedule]);



console.log(testSchedule)


    console.log(petSchedule)
    console.log(petSchedule !== undefined)
    console.log(sortPet)



    //have onePet include schedules
    //two filters, one AM one PM
    //iterate through pet array then sort?
    //sort so that Monday is first and Sunday last
    //map filtered and sorted data into designated columns
    //names of assigned user gets displayed under day/time
    //when fed displayed user button gets color

    //can reset week button reset backend for multiple data

    return ( 
        <div className="schedule-div">

            <button className="reset-button">Reset Week</button>
            <table className="schedule-table">
                <tr className="day">
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                    
                    
                </tr>
                <tr className="am-time">
                    <td>AM</td>
                    {mapAM}
                    
                    
                </tr>
                <tr className="pm-time">
                    <td>PM</td>
                    {mapPM}
                
                </tr>
            </table>
            <button onClick={routeChange}>Add to {petName}'s Schedule </button>
        
        
        </div>
     );
}

export default Schedules;