function PetSchedules({amObject, pmObject, monday, tuesday, wednesday, thursday, friday, saturday, sunday, handleSchedule}) {


console.log(thursday)
    function emptySchedule(array) {
        if(array.length === 0) {
        let amArray = array.push(amObject)
        let pmArray = array.push(pmObject)
        return pmArray
        
        }
      }
      console.log(thursday)

    function emptyHandleArray(array) {
        emptySchedule(array)
        handleSchedule(array)
    }
    function mapArray(array) {
        emptyHandleArray(array)
        if (array !== undefined) {
       return array.map((schedule) => {
            return(
                <p>{schedule.user}</p>
            )
           })
      }}
      console.log(mapArray(wednesday))
      console.log(mapArray(thursday))
    return ( 
        <div className="days">
                <div id='day' className="monday">
                    <h5>Monday</h5>
                    {mapArray(monday)}
                </div>
                <div id='day' className="tuesday">
                    <h5>Tuesday</h5>
                    {mapArray(tuesday)}
                </div>
                <div id='day' className="wednesday">
                    <h5>Wednesday</h5>
                    {mapArray(wednesday)}
                </div>
                <div id='day' className="thursday">
                    <h5>Thursday</h5>
                    {mapArray(thursday)}
                    
                </div>
                <div id='day' className="friday">
                    <h5>Friday</h5>
                    {mapArray(friday)}
                </div>
                <div id='day' className="saturday">
                    <h5>Saturday</h5>
                    {mapArray(saturday)}
                </div>
                <div id='day' className="sunday">
                    <h5>Sunday</h5>
                    {mapArray(sunday)}
                </div>
                
            </div>
     );
}

export default PetSchedules;