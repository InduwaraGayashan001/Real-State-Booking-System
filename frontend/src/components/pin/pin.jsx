import './pin.scss';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

function Pin({ item }) {
    const hasImage = Array.isArray(item.images) && item.images.length > 0;

    return (
        <Marker position={[parseFloat(item.latitude), parseFloat(item.longitude)]}>
            <Popup>
                <div className="popupContainer">
                    {hasImage && <img src={item.images[0]} alt="property" />}
                    <div className="textContainer">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span>{item.bedroom} bedroom</span>
                        <b>$ {item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
}

export default Pin;
