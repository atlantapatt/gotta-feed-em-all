function Test2({monday, tuesday, wednesday, thursday, handleSchedule}) {

    function mapArray(array) {
        handleSchedule(array)
        if (array !== undefined) {
       return array.map((schedule) => {
            return(
                <p>{schedule.user}</p>
            )
           })
      }}

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
                </div>
                <div id='day' className="saturday">
                    <p>Saturday</p>
                </div>
                <div id='day' className="sunday">
                    <p>Sunday</p>
                </div>
                
            </div>
     );
}

export default Test2;