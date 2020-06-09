import React from 'react';
import AboutSection from './aboutSection';
import ArticleSection from './articleSection';
import InfoSection from './infoSection';
import FullbleedSection from './fullbleedSection';
import JourneySection from './journeySection';
import GallerySection from './gallerySection';

export default function IndexMain() {
    return (
        <main>
            <AboutSection />
            <ArticleSection />
            <InfoSection />
            <FullbleedSection />
            <JourneySection />
            <GallerySection />
    </main>
    )
}