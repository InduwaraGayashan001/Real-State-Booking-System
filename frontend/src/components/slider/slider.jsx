import './slider.scss';
import { useState } from 'react';

function Slider({ images = [] }) {
    const [imageIndex, setImageIndex] = useState(null);

    const changeSLide = (direction) => {
        if (direction === "left") {
            setImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
        } else {
            setImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
        }
    };

    if (!Array.isArray(images) || images.length === 0) {
        return <div className="slider">No images available</div>;
    }

    return (
        <div className="slider">
            {imageIndex !== null && (
                <div className="fullSlider">
                    <div className="arrow">
                        <img src="/arrow.png" alt="left" onClick={() => changeSLide("left")} />
                    </div>
                    <div className="imgContainer">
                        <img src={images[imageIndex]} alt={`Slide ${imageIndex}`} />
                    </div>
                    <div className="arrow">
                        <img src="/arrow.png" className="right" alt="right" onClick={() => changeSLide("right")} />
                    </div>
                    <div className="close" onClick={() => setImageIndex(null)}>
                        <img src="/close.png" alt="close" />
                    </div>
                </div>
            )}

            <div className="bigImage">
                {images[0] && (
                    <img src={images[0]} alt="Preview" onClick={() => setImageIndex(0)} />
                )}
            </div>

            <div className="smallImages">
                {images.slice(1).map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        onClick={() => setImageIndex(index + 1)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;
