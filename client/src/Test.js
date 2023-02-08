import { useEffect, useState } from 'react';
import './Test.css'
function Test({onePet, petSchedule, setPetSchedule}) {
    const [monday, setMonday] = useState([])
    const [tuesday, setTuesday] = useState([])
    const [wednesday, setWednesday]= useState([])
    const [mapWed, setMapWed] = useState()

    const amObject = {AMorPM: 1, user: null}

    function index(array) {
        return array.findIndex(x => x.AMorPM == 1 )
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
      },[onePet]);
      console.log(petSchedule)

    useEffect(() => {
        if (petSchedule !== undefined) {
            petSchedule.forEach(schedule => {
               if (schedule.day === 1) {
                setMonday([schedule])
                
            }
            if (schedule.day === 2) {
                setTuesday([schedule])
            } 
            if (schedule.day === 3) {
                setWednesday([schedule])
                noAM(wednesday)
                // setWednesday(wednesday)
                // setWednesday(sortArray(wednesday))
                // setWednesday(wednesday)
            } 
            });
            
        } 
      },[]);

      console.log(petSchedule)
      console.log(index(wednesday))
     

      function sortArray(array) {
        return array.sort((a, b) => a.AMorPM - b.AMorPM)
      }

      function noAM(array) {
       if (index(array) == -1) {
       let newArray = array.push(amObject)
        console.log(newArray)
       } else {
        console.log('am exists')
       }
      }
// console.log(wednesday.forEach(schedule => {
//     if (!schedule.AMorPM == 1) {
//         console.log('no AM')
//     }
// }))
    //   function mapArray(array) {
    //    return array.map((schedule) => {
    //         return(
    //             <p>{schedule.user}</p>
    //         )
    //        })
    //   }

    //   useEffect(() => {
    //     if (wednesday.length == 2) {
    //         setMapWed(wednesday.map((schedule) => {
    //             return(
    //                 <p>{schedule.user}</p>
    //             )
    //            }))
    //     }
    // })
console.log(wednesday)
    return ( 
        <div className="calendar">
            <div className="time">
                    <p>AM</p>
                    <p>PM</p>
            </div>
            <div className="days">
                <div id='day' className="monday">
                    <p>Monday</p>
                    <p>test</p>
                    <p>Test</p>
                </div>
                <div id='day' className="tuesday">
                    <p>Tuesday</p>
                </div>
                <div id='day' className="wednesday">
                    <p>Wednesday</p>
                    {}
                </div>
                <div id='day' className="thursday">
                    <p>Thursday</p>
                </div>
                <div id='day' className="friday">
                    <p>Friday</p>
                </div>
                <div id='day' className="saturday">
                    <p>Saturday</p>
                </div>
                <div id='day' className="sunday">
                    <p>Sunday</p>
                </div>
                
            </div>
            
        </div>
     );
}

export default Test;