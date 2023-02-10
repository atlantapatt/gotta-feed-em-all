import { useEffect, useState } from 'react';
import './Test.css'
import Test2 from './Test2';
function Test({onePet, petSchedule, setPetSchedule, petName, url, setUrl}) {
    const [monday, setMonday] = useState([])
    const [tuesday, setTuesday] = useState([])
    const [wednesday, setWednesday]= useState([])
    const [thursday, setThursday] = useState([])
    const [friday, setFriday] = useState([])
    const [saturday, setSaturday] = useState([])
    const [sunday, setSunday] = useState([])
    const [loading, setLoading] = useState()


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

    console.log(onePet)
    console.log()
    console.log()

    function days() {
      if (petSchedule !== undefined) {
        if (petSchedule !== []) {
            petSchedule.filter(schedule => {
               if (schedule.day === 1) {
                setMonday(noSchedule([schedule]))
                // handleSchedule(monday)
                // setMonday(monday)
                
            }
            if (schedule.day === 2) {
                setTuesday(noSchedule([schedule]))
                // handleSchedule(tuesday)
                // setTuesday(tuesday)
            } 
            if (schedule.day === 3) {
                setWednesday(noSchedule([schedule]))
                
               
            }
            if (schedule.day === 4) {
                setThursday(noSchedule([schedule]))
                
                
            }
            if (schedule.day === 5) {
                setFriday(noSchedule([schedule])) 
            }
            if (schedule.day === 6) {
                setSaturday(noSchedule([schedule])) 
            }
            if (schedule.day === 7) {
                setSunday(noSchedule([schedule]))  
            } 
            });
        } else {
          setUrl(url)
        }
      }
    }

 
      console.log(petSchedule)
      
    useEffect(() => {
      if (petSchedule !== undefined) {
        days()
      }
      },[petSchedule]);

      console.log(petSchedule)
    //   console.log(wednesday)
     
      

      function sortArray(array) {
        if (array !== undefined) {
            return array.sort((a, b) => a.AMorPM - b.AMorPM)
        }
      }
    function noSchedule(array){
      noAM(array)
      noPM(array)
      return array
    }
    
      function noAM(array) {
       if (indexA(array) == -1) {
       let newArray = array.push(amObject)
        return (newArray)
       } if (array === undefined) {
        let newArray = amObject
        return (newArray)
       }else {
        console.log('am exists')
       }
      }

      

    console.log(thursday)

      function noPM(array) {
        if (indexP(array) == -1) {
        let newArray = array.push(pmObject)
         return newArray
        }  if (array === undefined) {
          let newArray = pmObject
          return newArray
         } else {
         console.log(`${array}: pm exists`)
        }
       }

      function handleSchedule(array) {
        sortArray(array)
        return array
      }


 
      

  


    return ( 
        <div className="calendar">
            <Test2 amObject={amObject} pmObject={pmObject} handleSchedule={handleSchedule} monday={monday}  tuesday={tuesday} wednesday={wednesday} thursday={thursday} friday={friday} saturday={saturday} sunday={sunday} />
            
        </div>
     );
}

export default Test;