import React, {useState} from 'react';
import './Gallery.css';
import GalleryImage from "./galleryImage/GalleryImage";
import GalleryItem from "./GalleryItem";

const Gallery = ({images}) => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (image) => {
        setSelectedImage(image);
    };
    const handleClick1 = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery-container">
            {images.map((image ,key) => (
                <GalleryItem
                    key={key}
                    image={image.image}
                    likes={image.likes}
                    onClick={() => handleClick(image)}
                />
            ))}
            {selectedImage && (
                <GalleryImage
                    image={selectedImage}
                    onClick={() => handleClick1()}
                />
            )}
        </div>
    );
}

export default Gallery;