import { useHistory } from "react-router-dom";
function Schedules({onePet}) {
    //map fetched schedules into columns
    const history = useHistory()

    function routeChange() {
        let path = '/addschedule'
        history.push(path)
    }

    //have onePet include schedules
    //two filters, one AM one PM
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