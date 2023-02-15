import React from 'react';
import './Gallery.css'

function GalleryItem({ image, likes, onClick }) {
    return (
        <div className="gallery-item" onClick={onClick}>
            <img src={image} alt="Gallery" />
            <div className="likes">
                {likes}
            </div>
        </div>
    );
}
export default GalleryItem;