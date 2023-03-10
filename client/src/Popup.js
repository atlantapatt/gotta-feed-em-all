import './Popup.css'
function Popup({togglePopup}) {

    function handleDelete() {
        console.log('delete')
    }
    return ( 
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={togglePopup}>x</span>
                <b className='delete'>Are you sure you wish to permanently delete your account?</b>
                <br></br>
                <div className='buttons'>
                    <button id='yes' onClick={handleDelete}>YES</button>
                    <button id='no' onClick={togglePopup}>NO</button>
                </div>
            </div>
        </div>
     );
}

export default Popup;