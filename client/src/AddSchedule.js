import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import './AddSchedule.css'


function AddSchedule({familyNames, onePet, url, family, handleAddSchedule, names, setNames}) {
    const [day, setDay] = useState()
    const [time, setTime] = useState()
    const [person, setPerson] = useState()
    
    const [mapNames, setMapNames] = useState()
    console.log(`the day is ${day} and the time is ${time}`)
    const history = useHistory()
    //add a back button?
function routeChange() {
    history.push(url)
}

console.log(person)
console.log(familyNames)
    // fetch family member names
    useEffect(() => {
        if (family !== null) {
        fetch(`/family/${family.id}/users`).then((response) => {
          if (response.ok) {
            response.json().then((user) => setNames(user));
          }
        })};
      },[family]);
      console.log(names)
      
    //   useEffect(() => {
    //     if (names !== undefined) {
    //       setMapNames(names.map((users) => {
    //         return(
    //             <option value={users.id}>{users.name}</option>
    //         )
    //        }))
    //     } else {
    //         console.log("no users")
    //     }
    //   },[names]);

    useEffect(() => {
        setMapNames(names.map((users) => {
            return(
                <option value={users.id}>{users.username}</option>
            )
        }))
    },[])

    
    function setSchedule() {
        fetch("/schedule", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                day: day,
                AMorPM: time,
                user_id: person,
                pet_id: onePet.id,
                isfed: false
    
            }),
        }).then((r) => {
            r.json().then((schedule) => handleAddSchedule(schedule))
        })
    }
    
    function onSubmit(e) {
        e.preventDefault()
        setSchedule()
        routeChange()
        
    }
    return ( 
        <div className="add-schedule">
            <button className="back-button" onClick={routeChange}>Go Back</button>
            <form className="schedule-form" onSubmit={onSubmit}>
                <p>You are adding to {onePet.name}'s schedule.</p>
                <div id="day-radio">
                    <p className="select">Select a Day of the Week</p>
                    <label>M</label>
                    <input onClick={((e) => setDay(e.target.value))} value={1} type='radio' name="day"></input>
                </div>
                <div id="day-radio">
                    <label>T</label>
                    <input onClick={((e) => setDay(e.target.value))} value={2} type='radio' name="day"></input>
                </div>
                <div id="day-radio">
                    <label>W</label>
                    <input onClick={((e) => setDay(e.target.value))} value={3} type='radio' name="day"></input>
                </div>
                <div id="day-radio">
                    <label>Th</label>
                    <input onClick={((e) => setDay(e.target.value))} value={4} type='radio' name="day"></input>
                </div>
                <div id="day-radio">
                    <label>F</label>
                    <input onClick={((e) => setDay(e.target.value))} value={5} type='radio' name="day"></input>
                </div>
                <div id="day-radio">
                    <label>S</label>
                    <input onClick={((e) => setDay(e.target.value))} value={6} type='radio' name="day"></input>
                </div>
                <div id="day-radio">
                    <label>Su</label>
                    <input onClick={((e) => setDay(e.target.value))} value={7} type='radio' name="day"></input>
                </div>
                    <div className='AMorPM'>
                        <lable>AM or PM</lable>
                        <br></br>
                        <div className="time-radio">
                            <lable>AM</lable>
                            <input onClick={((e) => setTime(e.target.value))} name='time' type='radio' value={1}></input>
                            <label>PM</label>
                            <input onClick={((e) => setTime(e.target.value))} name='time' type='radio' value={2}></input>
                    </div>
                </div>
                <div className="assignment">
                    <lable>Person Assigned</lable>
                    <select onChange={((e) => setPerson(e.target.value))}>
                        <option>Select Family Member</option>
                        {mapNames}
                    </select>
                    <br></br>
                </div>
                <button className="submit-button">Submit</button>
            </form>
        </div>
     );
}

export default AddSchedule;