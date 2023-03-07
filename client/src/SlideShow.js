import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function SlideShow() {
    let dogsArray = ['sobaoutside.jpg', 'bigeyes.JPG', 'birthday.PNG', 'closeup.jpg', 'hershey.JPG', 'inthecar.PNG', 'mochi.JPG', 'samson.JPG', 'soba.jpg', 'swing.JPG', 'together.jpg']

    return ( 
        <div className='slide-container'>
            <Fade>
                <div className="each-fade">

                </div>
            </Fade>
        </div>
     );
}

export default SlideShow;