import './Test.css'
function Test() {
    return ( 
        <div className="calendar">
            <div className="days">
                <div id='day' className="monday">
                    <p>Monday</p>
                </div>
                <div id='day' className="tuesday">
                    <p>Tuesday</p>
                </div>
                <div id='day' className="wednesday">
                    <p>Wednesday</p>
                </div>
                <div id='day' className="thursday">
                    <p>Thursday</p>
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
            <div className="time">
                    <p>AM</p>
                    <p>PM</p>
            </div>
        </div>
     );
}

export default Test;