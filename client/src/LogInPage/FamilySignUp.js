function FamilySignUp({setSignUp, familyName, setFamilyName, familyPassword, setFamilyPassword, family, setFamily}) {
    function postFamily() {
        //add more into the form?
        fetch('/family', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                last_name: familyName,
                password: familyPassword,
            }),
        }).then((r) => {
            r.json().then((family) => setFamily(family))
        })
    }
        function onSubmit() {
            setSignUp(false)
            postFamily()
        }
    return ( 
        <div>
            <div className="new-family">
                <p>Please create your family name and password.</p>
                <form>
                    <label>Family Name</label>
                    <input id="family-name" type='text' value={familyName} onChange={(e) => setFamilyName(e.target.value)} ></input>
                    <br></br>
                    <label>Family Password</label>
                    <input id="family-password" type='text' value={familyPassword} onChange={(e) => setFamilyPassword(e.target.value)}></input>
                    <button onClick={(() => onSubmit())}>Submit</button>
                </form>
            </div>       
        </div>
     );
}

export default FamilySignUp;