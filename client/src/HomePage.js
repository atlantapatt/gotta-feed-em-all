import { useEffect } from "react";
import PetCard from "./PetCard";

function HomePage({myPets, setMyPets, url, setUrl}) {
    //fix so only account associeted pets show
    //Mochi Soba show for every account
let emptyArray = (myPets.length == 0)


console.log(myPets)
console.log(myPets.length)



// useEffect(() => {
//     fetch("/me").then((response) => {
//       if (response.ok) {
//         response.json().then((user) => setMyPets(user.pets));
//       } 
//     });
//   },[]);

    
  let mappedPets = myPets.map((pet) => {
    return(
      <PetCard pet={pet} url={url} setUrl={setUrl} />
    )
  }) 

 let noPets = <div className="no-pets"><p>Add a pet to get started!</p></div>
 
console.log(emptyArray)
// console.log(mappedPets)

    return (
        <div className="home-div">
            {emptyArray ? noPets : mappedPets}
        </div>
    )

}
export default HomePage