import './FamilyButtons.css'
function FamilyButtons({setShowChoice, setIsNewFamily}) {
    function routeExisting() {
        setShowChoice(false)
        setIsNewFamily(false)
    }

    function routeNew() {
       setShowChoice(false)
       setIsNewFamily(true)
    }

    return ( 
        
        <div className="create-join">
            <p>Please Create or Join an Existing Family</p>
            <div className="buttons">
                <button id='button' onClick={(() => routeNew())}>Create New Family</button>
                <button id='button' onClick={(() => routeExisting())}>Join Existing Family</button>
            </div>
        </div>
     );
}

export default FamilyButtons;