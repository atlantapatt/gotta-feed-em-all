import { useEffect, useState } from 'react';
import './Test.css'
import Test2 from './Test2';
function Test({onePet, petSchedule, setPetSchedule, petName, url, setUrl}) {
    const [monday, setMonday] = useState([])
    const [tuesday, setTuesday] = useState([])
    const [wednesday, setWednesday]= useState([])
    const [thursday, setThursday] = useState()
    const [friday, setFriday] = useState()
    const [saturday, setSaturday] = useState()
    const [sunday, setSunday] = useState()
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
        } else {
          setUrl(url)
        }
      }
    }

    // useEffect(() => {
    //     if (onePet !== undefined) {
    //       fetch(`/pet/${onePet.id}`).then((response) => {
    //       if (response.ok) {
    //         response.json().then((pet) => setPetSchedule(pet));
    //       } else {
    //         setUrl(url)
    //       }
    //     });
    //     } 
    //   },[setUrl]);
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
        setLoading(false)
        return array
      }

      console.log()
 
      

  
console.log(wednesday)
    return ( 
        <div className="calendar">
            <Test2 handleSchedule={handleSchedule} monday={monday}  tuesday={tuesday} wednesday={wednesday} thursday={thursday} />
            
        </div>
     );
}

export default Test;