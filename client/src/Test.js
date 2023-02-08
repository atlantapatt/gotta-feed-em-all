import { useEffect, useState } from 'react';
import './Test.css'
function Test({onePet, petSchedule, setPetSchedule, setMyPets, myPets}) {
    const [monday, setMonday] = useState([])
    const [tuesday, setTuesday] = useState([])
    const [wednesday, setWednesday]= useState([])
    const [thursday, setThursday] = useState()
    const [friday, setFriday] = useState()
    const [saturday, setSaturday] = useState()
    const [sunday, setSunday] = useState()


    const amObject = {AMorPM: 1, user: 'no user'}
    const pmObject = {AMorPM: 2, user: 'no user'}

    function indexA(array) {
        if (array !== undefined) {
          return array.findIndex(x => x.AMorPM == 1 )  
        }
    }
    function indexP(array) {
        if (array !== undefined) {
          return array.findIndex(x => x.AMorPM == 2 )
        }
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
      },[onePet.id]);
      console.log(petSchedule)

    useEffect(() => {
        if (petSchedule !== undefined) {
            petSchedule.forEach(schedule => {
               if (schedule.day === 1) {
                setMonday([schedule])
                // handleSchedule(monday)
                // setMonday(monday)
                
            }
            if (schedule.day === 2) {
                setTuesday([schedule])
                // handleSchedule(tuesday)
                // setTuesday(tuesday)
            } 
            if (schedule.day === 3) {
                setWednesday([schedule])
               
            }
            if (schedule.day === 4) {
                setThursday([schedule])   
               
            }
            // if (schedule.day === 5) {
            //     setFriday([schedule])
            // //    
               
            // }
            // if (schedule.day === 6) {
            //     setSaturday([schedule])
            // //    
               
            // }
            // if (schedule.day === 7) {
            //     setSunday([schedule])
            // //    
            // } 
            });
            
        } 
      },[]);

      console.log(petSchedule)
    //   console.log(wednesday)
     
      

      function sortArray(array) {
        if (array !== undefined) {
            return array.sort((a, b) => a.AMorPM - b.AMorPM)
        }
      }

      function noAM(array) {
       if (indexA(array) == -1) {
       let newArray = array.push(amObject)
        return (newArray)
       }else {
        console.log('am exists')
       }
      }



      function noPM(array) {
        if (indexP(array) == -1) {
        let newArray = array.push(pmObject)
         return (newArray)
        } else {
         console.log('pm exists')
        }
       }

      function handleSchedule(array) {
        noAM(array)
        noPM(array)
        sortArray(array)
        return array
      }

      console.log(handleSchedule(thursday))
 
      function mapArray(array) {
        handleSchedule(array)
        if (array !== undefined) {
       return array.map((schedule) => {
            return(
                <p>{schedule.user}</p>
            )
           })
      }}

  
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
                    {mapArray(monday)}
                </div>
                <div id='day' className="tuesday">
                    <p>Tuesday</p>
                    {mapArray(tuesday)}
                </div>
                <div id='day' className="wednesday">
                    <p>Wednesday</p>
                    {mapArray(wednesday)}
                </div>
                <div id='day' className="thursday">
                    <p>Thursday</p>
                    {mapArray(thursday)}
                    
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