import './slider.scss';
import { useState } from 'react';

function Slider({ images }) {
    const [imageIndex, setImageIndex] = useState(null);
    const changeSLide = (direction) => {
        if (direction === "left") {
            if (imageIndex === 0) {
                setImageIndex(images.length - 1);
            } else {
                setImageIndex(imageIndex - 1);
            }
        } else {
            if (imageIndex === images.length - 1) {
                setImageIndex(0);
            } else {
                setImageIndex(imageIndex + 1);
            }
        }
    };
    return (
        <div className="slider">
            {imageIndex !== null && (
                <div className="fullSlider">
                    <div className="arrow">
                        <img src="/arrow.png" alt="" onClick={()=>changeSLide("left")} />
                    </div>
                    <div className="imgContainer">
                        <img src={images[imageIndex]} alt="" />
                    </div>
                    <div className="arrow">
                        <img src="/arrow.png" className='right' alt="" onClick={()=>changeSLide("right")} />
                    </div>
                    <div className="close" onClick={() => setImageIndex(null)}>
                        <img src="/close.png" alt="" />
                    </div>
                </div>
            )}
            <div className="bigImage">
                <img src={images[0]} alt="" onClick={()=>setImageIndex(0)}/>
            </div>
            <div className="smallImages">
                {images.slice(1).map((image, index) => (
                    <img key={index} src={image} alt="" onClick={() => setImageIndex(index+1)} />  
                ))}
            </div>
        </div>
    )
}

export default Slider;