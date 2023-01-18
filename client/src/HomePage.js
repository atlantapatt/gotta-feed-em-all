function HomePage({myPets}) {
 let mappedPets = myPets.map((pet) => {
    return (
        <div>
            <p>{pet.name}</p>
        </div>
    )
 })   
    return(
        <div>
            {mappedPets}
        </div>
    )
}

export default HomePage