function AddSchedule({onePet}) {
    function onSubmit() {
        console.log('submitted')
    }
    return ( 
        <div>
            <form onSubmit={onSubmit}>
                <p>Adding to {onePet.name}'s schedule.</p>
                <div id="day-checkbox">
                    <label>M</label>
                    <input type='checkbox'></input>
                </div>
                <div id="day-checkbox">
                    <label>T</label>
                    <input type='checkbox'></input>
                </div>
                <div id="day-checkbox">
                    <label>W</label>
                    <input type='checkbox'></input>
                </div>
                <div id="day-checkbox">
                    <label>Th</label>
                    <input type='checkbox'></input>
                </div>
                <div id="day-checkbox">
                    <label>F</label>
                    <input type='checkbox'></input>
                </div>
                <div id="day-checkbox">
                    <label>S</label>
                    <input type='checkbox'></input>
                </div>
                <div id="day-checkbox">
                    <label>Su</label>
                    <input type='checkbox'></input>
                </div>
                <lable>AM or PM</lable>
                <br></br>
                <div className="time-checkbox">
                    <lable>AM</lable>
                    <input type='checkbox'></input>
                    <label>PM</label>
                    <input type='checkbox'></input>
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