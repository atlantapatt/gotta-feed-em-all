import Schedules from "./Schedules";

function SinglePetCard({onePet}) {
//data sometimes doesn't load immediatly
    console.log(onePet)

    function petType() {
        if (onePet.pet_type_id === 1) {
            return ("dog")
        }
        if (onePet.pet_type_id === 2) {
            return ("cat")
        }
        if (onePet.pet_type_id === 3) {
            return("other")
        }
    }

    return ( 
        <div>
            {onePet.name}
            <br></br>
            {petType()}
            <Schedules onePet={onePet} />
        </div>
     );
}

export default SinglePetCard;