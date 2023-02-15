import React from 'react';
import './GalleryPage.css';
import Gallery from "../../components/gallery/Gallery";

const GalleryPage = (props) => {
    const images = [
        {
            id: 1,
            image: 'https://picsum.photos/id/1/200/300',
            likes: 10
        },
        {
            id: 2,
            image: 'https://picsum.photos/id/2/200/300',
            likes: 15
        },
        {
            id: 3,
            image: 'https://picsum.photos/id/3/200/300',
            likes: 20
        },
        {
            id: 3,
            image: 'https://picsum.photos/id/3/200/300',
            likes: 20
        },
        {
            id: 3,
            image: 'https://picsum.photos/id/3/200/300',
            likes: 20
        },
        {
            id: 3,
            image: 'https://picsum.photos/id/3/200/300',
            likes: 20
        },
    ];

    return (
        <div className="page">
            <Gallery images={images}/>
        </div>
    );
};

export default GalleryPage;