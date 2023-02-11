import './Popup.css'
function Popup({togglePopup}) {

    function handleDelete() {
        console.log('delete')
    }
    return ( 
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={togglePopup}>x</span>
                <b className='delete'>Are you sure you wish to delete your account?</b>
                <br></br>
                <button className='button' onClick={handleDelete}>YES</button>
                <button className='button' onClick={togglePopup}>NO</button>
            </div>
        </div>
     );
}

export default Popup;