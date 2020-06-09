import React from 'react';

import gallery1 from '../assets/home-image-6.jpg'
import gallery2 from '../assets/home-image-7.jpg'
import gallery3 from '../assets/home-image-8.jpg'
import GalleryContainer from './galleryContainer';

export default function GallerySection() {
    return (
        <section class="gallery">
        <div class="wrapper">
            <GalleryContainer 
                imgSrc={gallery1}
                altText='blue bicycle in front of an orange background'
            />
            <GalleryContainer 
                imgSrc={gallery2}
                altText='an orange building with an arch'
            />
            <GalleryContainer 
                imgSrc={gallery3}
                altText="the inside of an orange umbrella reading 'banana beach' looking up at a blue sky"
            />

        </div>
    </section>
    )
}