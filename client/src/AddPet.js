import { useState } from "react";

function AddPet({myPets, handleAddPet, user}) {
    const [petType, setPetType] = useState(1)
    const [petName, setPetName] = useState("")

    console.log(petType)
    function onChange(e) {
        setPetType(e.target.value)
    }
    //figure out how to submit and keep saved to user
    function onSubmit(e) {
        e.preventDefault()
        fetch("/pet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: petName,
                pet_type_id: petType,
                family_id: 1,
                users: user

            }),
        }).then((r) => {
            r.json().then((pet) => console.log(pet))
        })
    }
    
    return ( 
        <div className="add-pet-div">
            <form onSubmit={onSubmit}>
                <label>Pet Name</label>
                <input type='text' value={petName} onChange={(e) => setPetName(e.target.value)}></input>
                <br></br>
                <select onChange={onChange}>
                    <option value={1}>Dog</option>
                    <option value={2}>Cat</option>
                    <option value={3}>Other</option>
                </select>
                <button>SUBMIT</button>
            </form>
        </div>
     );
}

export default AddPet;