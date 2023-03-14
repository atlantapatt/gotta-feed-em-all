import React, { useState } from "react";


function SlideShow() {
    let dogsArray = ['sobaoutside.jpg', 'bighead.JPG', 'birthday.PNG', 'closeup.jpg', 'hershey.JPG', 'mochioutside.JPG', 'mochi.JPG', 'samson.JPG', 'soba.jpg', 'swing.JPG', 'sobacouch.JPG', 'sobaglasses.JPG', 'together.jpg', 'teeth.JPG']
    const [currentIndex, setCurrentIndex] = useState(0)

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${dogsArray[currentIndex]})`,
    };

    const sliderStyles = {
        height: '100%',
        position: 'relative'
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '8px',
        fontSize: '30px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    }

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '8px',
        fontSize: '30px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'
    }

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',

    }

    const dotStyles= {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '11px'
    }

    function goToPrevious() {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide? dogsArray.length -1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    function goToNext() {
        const isLastSlide = currentIndex === dogsArray.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    function goToSlide(slideIndex) {
        setCurrentIndex(slideIndex)
    }

    return ( 
        <div className="slider" style={sliderStyles}>
            <div onClick={goToPrevious} style={leftArrowStyles}>
                <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div onClick={goToNext} style={rightArrowStyles}>
                <i class="fa-solid fa-arrow-right"></i>
            </div>
            <div style={slideStyles}></div>
            <div style={dotsContainerStyles}>
                {dogsArray.map((slide, slideIndex) => (
                    <div className="dot" onClick={() => goToSlide(slideIndex)} style={dotStyles} key={slideIndex}>
                        <i class="fa-solid fa-circle"></i>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default SlideShow;