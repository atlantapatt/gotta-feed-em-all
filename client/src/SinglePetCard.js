function SinglePetCard({onePet}) {
//data sometimes doesn't load immediatly
    console.log(onePet)

    function petType() {
        if (onePet.id === 1) {
            return ("dog")
        }
        if (onePet.id === 2) {
            return ("cat")
        }
        if (onePet.id === 3) {
            return("other")
        }
    }

    return ( 
        <div>
            {onePet.name}
            <br></br>
            {petType()}
        </div>
     );
}

export default SinglePetCard;