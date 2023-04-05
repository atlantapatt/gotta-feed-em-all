import { useState } from "react";
import { useHistory, useNavigate } from "react-router-dom";
import './AddPet.css'


function AddPet({pet, setNewPet, newPet, myPets, handleAddPet, user, family}) {
    const [petType, setPetType] = useState(1)
    const [petName, setPetName] = useState("")
    const history = useHistory()
    // const [petID, setPetID] = useState(newPet.id)

    console.log(setNewPet)
    
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
//change petuser to schedule as join table?
// function petUser() {
//     fetch("/petuser", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             user_id: user.id,
//             pet_id: newPet.id,

//         }),
//     }).then((r) => {
//         r.json().then((pet) => console.log(pet))
//     },[])
// }

    function onSubmit(e) {
        e.preventDefault()
        petPost()
        // petUser()
        handleAddPet(newPet)
        setNewPet()
        goHomeRoute()
        window.location.reload(false);
    }
    console.log(myPets)
    
    return ( 
        <div className="add-pet-div">
            <form onSubmit={onSubmit}>
                <div onClick={pet} className="close">X</div>
                <h4>Add Pet Here</h4>
                <label>Pet Name</label>
                <br></br>
                <input type='text' value={petName} onChange={(e) => setPetName(e.target.value)}></input>
                <br></br>
                <select onChange={onChange}>
                    <option value={1}>Dog</option>
                    <option value={2}>Cat</option>
                    <option value={3}>Other</option>
                </select>
                <br></br>
                <button>SUBMIT</button>
            </form>
        </div>
     );
}

export default AddPet;