import React from 'react';

export default function GalleryContainer({ imgSrc, altText }) {
    return (
        <div class="gallery-container">
            <img src={imgSrc} alt={altText}/>
        </div>
    )
}