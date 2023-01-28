import { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";


function AddPet({setNewPet, newPet, myPets, handleAddPet, user, family}) {
    const [petType, setPetType] = useState(1)
    const [petName, setPetName] = useState("")
    const history = useHistory()
    // const [petID, setPetID] = useState(newPet.id)

    // console.log(petID)
    
    // console.log(newPet.id)
    console.log(petType)

    function goHomeRoute() {
        let path = '/'
        history.push(path)
    }

    function onChange(e) {
        setPetType(e.target.value)
    }
    //figure out how to submit and keep saved to user
    //make sure family.id doesn't error out due to null
function petPost() {
    fetch("/pet", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: petName,
            pet_type_id: petType,
            family_id: family.id,

        }),
    }).then((r) => {
        r.json().then((pet) => setNewPet(pet))
    },[])
}

function petUser() {
    fetch("/petuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_id: user.id,
            pet_id: newPet.id,

        }),
    }).then((r) => {
        r.json().then((pet) => console.log(pet))
    },[])
}

    function onSubmit(e) {
        e.preventDefault()
        petPost()
        petUser()
        handleAddPet(newPet)
        setNewPet()
        goHomeRoute()
        window.location.reload(false);
    }
    console.log(myPets)
    
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