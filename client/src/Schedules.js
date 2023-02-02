import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
function Schedules({onePet}) {
    const [pet, setPet] = useState()
    let petSort
    //map fetched schedules into columns
    const history = useHistory()

    function routeChange() {
        let path = '/addschedule'
        history.push(path)
    }

    useEffect(() => {
        if (onePet !== null) {
          fetch(`/pet/${onePet.id}`).then((response) => {
          if (response.ok) {
            response.json().then((pet) => setPet(pet));
          } else {
            return null
          }
        });
        } 
      },[]);

    // let petAM = pet.filter(pet => {
    //     if (pet.AMorPM == 1) {
    //         return pet
    //     }
    // })

    // let petPM = pet.filter(pet => {
    //     if (pet.AMorPM == 2) {
    //         return pet
    //     }
    // })

    //type error on pet.sort even though its not undefined
    //petSort returning null
    useEffect(() => {
        if (pet !== undefined) {
            petSort = pet.sort(function(a, b) {
                    var keyA = a.day,
                        keyB = b.day;
                // Compare the 2 dates
                    if (keyA < keyB) return -1;
                    if (keyA > keyB) return 1;
                    return 0;
                });
            } else {
                return null
            }
      },[pet]);

// if (pet !== null) {
// petSort = pet.sort(function(a, b) {
//         var keyA = a.day,
//             keyB = b.day;
//     // Compare the 2 dates
//         if (keyA < keyB) return -1;
//         if (keyA > keyB) return 1;
//         return 0;
//     });
// } else {
//     return null
// }



    console.log(pet)
    console.log(pet !== undefined)
    console.log(petSort)



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
                <tr>
                    <th>Time</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
                <tr>
                    <td>AM</td>
                    <td>info</td>
                </tr>
                <tr>
                    <td>PM</td>
                    <td>info</td>
                </tr>
                
            </table>
            <button onClick={routeChange}>Add to {onePet.name}'s Schedule </button>
        </div>
     );
}

export default Schedules;