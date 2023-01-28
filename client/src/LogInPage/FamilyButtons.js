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
        
        <div>
            <p>Please Create or Join an Existing Family</p>
            <button onClick={(() => routeNew())}>Create New Family</button>
            <button onClick={(() => routeExisting())}>Join Existing Family</button>
            
        </div>
     );
}

export default FamilyButtons;