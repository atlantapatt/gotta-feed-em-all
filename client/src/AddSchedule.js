import { useState } from "react";

function AddSchedule({onePet}) {
    const [day, setDay] = useState()
    const [time, setTime] = useState()
    const [person, setPerson] = useState()
    console.log(`the day is ${day} and the time is ${time}`)
  
    //add a back button?
    //fetch family member names
    function onSubmit(e) {
        e.preventDefault()
        console.log('submitted')
    }
    return ( 
        <div>
            <form onSubmit={onSubmit}>
                <p>You are adding to {onePet.name}'s schedule.</p>
                <div id="day-radio">
                    <p>Select a Day of the Week</p>
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
                <lable>AM or PM</lable>
                <br></br>
                <div className="time-radio">
                    <lable>AM</lable>
                    <input onClick={((e) => setTime(e.target.value))} name='time' type='radio' value={1}></input>
                    <label>PM</label>
                    <input onClick={((e) => setTime(e.target.value))} name='time' type='radio' value={2}></input>
                </div>
                <lable>Person Assigned</lable>
                <select>
                    {/* map over family members */}
                </select>
                <br></br>
                <button>Submit</button>
            </form>
        </div>
     );
}

export default AddSchedule;