function Test2({amObject, pmObject, monday, tuesday, wednesday, thursday, friday, saturday, sunday, handleSchedule}) {


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
                    <p>Monday</p>
                    {mapArray(monday)}
                </div>
                <div id='day' className="tuesday">
                    <p>Tuesday</p>
                    {mapArray(tuesday)}
                </div>
                <div id='day' className="wednesday">
                    <p>Wednesday</p>
                    {mapArray(wednesday)}
                </div>
                <div id='day' className="thursday">
                    <p>Thursday</p>
                    {mapArray(thursday)}
                    
                </div>
                <div id='day' className="friday">
                    <p>Friday</p>
                    {mapArray(friday)}
                </div>
                <div id='day' className="saturday">
                    <p>Saturday</p>
                    {mapArray(saturday)}
                </div>
                <div id='day' className="sunday">
                    <p>Sunday</p>
                    {mapArray(sunday)}
                </div>
                
            </div>
     );
}

export default Test2;