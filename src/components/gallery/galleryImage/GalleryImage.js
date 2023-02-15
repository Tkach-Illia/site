import React from 'react';
import './GalleryImage.css'

function GalleryImage({image, onClick}) {
    return (
        <div className="gallery-image" onClick={onClick}>
            <img src={image.image} alt="Gallery"/>
            <div className="likes">
                {image.likes}
            </div>
        </div>
    );
}

export default GalleryImage;