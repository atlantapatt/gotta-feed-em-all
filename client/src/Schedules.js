import { useEffect, useState } from 'react';
import './Schedules.css'
import PetSchedules from './PetSchedules';
import { useHistory} from "react-router-dom";

function Schedules({onePet, petSchedule, setPetSchedule, petName, url, setUrl}) {
    const [monday, setMonday] = useState([])
    const [tuesday, setTuesday] = useState([])
    const [wednesday, setWednesday]= useState([])
    const [thursday, setThursday] = useState([])
    const [friday, setFriday] = useState([])
    const [saturday, setSaturday] = useState([])
    const [sunday, setSunday] = useState([])
  
    const daysOfWeek = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]

    const history = useHistory()
   


    function routeChange() {
        let path = '/addschedule'
        history.push(path)
    }

    const amObject = {AMorPM: 1, user: {name: 'no user'}}
    const pmObject = {AMorPM: 2, user: {name: 'no user'}}

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

    console.log(indexA(monday))
    console.log(petSchedule)

    function mondayDay(){
      setMonday(noSchedule(petSchedule.filter(schedule => schedule.day === 1)))
    }

    function tuesdayDay() {
      setTuesday(noSchedule(petSchedule.filter(schedule => schedule.day === 2)))
    }

    function wednesdayDay() {
      setWednesday(noSchedule(petSchedule.filter(schedule => schedule.day === 3)))
    }

    function thursdayDay() {
      setThursday(noSchedule(petSchedule.filter(schedule => schedule.day === 4)))
    }

    function fridayDay() {
      setFriday(noSchedule(petSchedule.filter(schedule => schedule.day === 5)))
    }

    function saturdayDay() {
      setSaturday(noSchedule(petSchedule.filter(schedule => schedule.day === 6)))
    }

    function sundayDay() {
      setSunday(noSchedule(petSchedule.filter(schedule => schedule.day === 7)))
    }

    function days() {
      if (petSchedule !== undefined) {
        if (petSchedule !== []) {
            mondayDay()
            tuesdayDay()
            wednesdayDay()
            thursdayDay()
            fridayDay()
            saturdayDay()
            sundayDay()
        } else {
          setUrl(url)
        }
      }
    }

    function checkDay() {
      console.log(petSchedule.filter(schedule => schedule.day === 1))
    }

    function checkSchedule() {
      daysOfWeek.forEach(el => noSchedule(el))
    }
 
      console.log(monday)
      
    useEffect(() => {
      if (petSchedule !== undefined) {
        days()
        // checkSchedule()
      }
      },[petSchedule]);

      console.log(petSchedule)
     
      

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
       if (indexA(array) === -1) {
       let newArray = array.push(amObject)
        array = newArray
       } if (array === undefined) {
        let newArray = amObject
        array = newArray
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
         console.log(`pm exists`)
        }
       }

      function handleSchedule(array) {
        sortArray(array)
        return array
      }

    return ( 
        <div className="calendar">
          <h4>{petName}'s Schedule</h4>
            <PetSchedules amObject={amObject} pmObject={pmObject} handleSchedule={handleSchedule} monday={monday}  tuesday={tuesday} wednesday={wednesday} thursday={thursday} friday={friday} saturday={saturday} sunday={sunday} />
            <button onClick={routeChange} >Add to {petName}'s Schedule </button>
        </div>
     );
}

export default Schedules;