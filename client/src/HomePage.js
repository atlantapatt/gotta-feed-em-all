import { useEffect } from "react";

function HomePage({myPets, setMyPets, user}) {
    //fix so only account associeted pets show
    //Mochi Soba show for every account

// console.log(myPets) 

// useEffect(() => {
//     fetch("/me").then((response) => {
//       if (response.ok) {
//         response.json().then((user) => setMyPets(user.pets));
//       }
//     });
//   }, []);

let userPets = user.pets
console.log(userPets)

let mappedPets = userPets.map((pets) => {
    return(
        <div>
            <p>{pets.name}</p>
        </div>
    )
})
// console.log(mappedPets)

    return(
        <div>
            {mappedPets}
        </div>
    )
}

export default HomePage