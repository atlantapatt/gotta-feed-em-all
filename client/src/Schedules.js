import { useHistory } from "react-router-dom";
function Schedules({onePet}) {
    const history = useHistory()

    function routeChange() {
        let path = '/addschedule'
        history.push(path)
    }

    return ( 
        <div>
            <p>Schedules</p>
            <button onClick={routeChange}>Add to {onePet.name}'s Schedule </button>
        </div>
     );
}

export default Schedules;