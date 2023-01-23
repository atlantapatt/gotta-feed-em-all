function SinglePetCard({onePet}) {
//data sometimes doesn't load immediatly
    console.log(onePet.name)
    return ( 
        <div>
            {onePet.name}
        </div>
     );
}

export default SinglePetCard;