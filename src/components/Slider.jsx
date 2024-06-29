import React, { useState, useRef } from 'react';

const Slider = () => {
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDown(true);
        const slider = sliderRef.current;
        setStartX(e.pageX - slider.offsetLeft);
        setScrollLeft(slider.scrollLeft);
    };

    const handleMouseLeave = () => {
        if (isDown) {
            setIsDown(false);
        }
    };

    const handleMouseUp = () => {
        if (isDown) {
            setIsDown(false);
        }
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const slider = sliderRef.current;
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1; // scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    };

    const handleWheel = (e) => {
        e.preventDefault();
        const slider = sliderRef.current;
        slider.scrollLeft += e.deltaY;
    };

    return (
        <div
            className="slider flex overflow-x-scroll p-5 gap-5 bg-white rounded-lg shadow-lg cursor-grab active:cursor-grabbing"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onWheel={handleWheel}
        >
            <div className="card min-w-[300px] h-[400px] bg-black rounded-lg flex-shrink-0" style={{ backgroundImage: 'url(/path/to/card1.png)' }}></div>
            <div className="card min-w-[300px] h-[400px] bg-black rounded-lg flex-shrink-0" style={{ backgroundImage: 'url(/path/to/card2.png)' }}></div>
            <div className="card min-w-[300px] h-[400px] bg-black rounded-lg flex-shrink-0" style={{ backgroundImage: 'url(/path/to/card3.png)' }}></div>
            <div className="card min-w-[300px] h-[400px] bg-black rounded-lg flex-shrink-0" style={{ backgroundImage: 'url(/path/to/card4.png)' }}></div>
            <div className="card min-w-[300px] h-[400px] bg-black rounded-lg flex-shrink-0" style={{ backgroundImage: 'url(/path/to/card5.png)' }}></div>
            <div className="card min-w-[300px] h-[400px] bg-black rounded-lg flex-shrink-0" style={{ backgroundImage: 'url(/path/to/card5.png)' }}></div>
            <div className="card min-w-[300px] h-[400px] bg-black rounded-lg flex-shrink-0" style={{ backgroundImage: 'url(/path/to/card5.png)' }}></div>
            <div className="card min-w-[300px] h-[400px] bg-black rounded-lg flex-shrink-0" style={{ backgroundImage: 'url(/path/to/card5.png)' }}></div>
            <div className="card min-w-[300px] h-[400px] bg-black rounded-lg flex-shrink-0" style={{ backgroundImage: 'url(/path/to/card5.png)' }}></div>
            {/* Add more cards as needed */}
        </div>
    );
};

export default Slider;