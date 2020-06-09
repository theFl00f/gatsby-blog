import React from 'react';
import AboutSection from './aboutSection';
import ArticleSection from './articleSection';
import InfoSection from './infoSection';

export default function IndexMain() {
    return (
        <main>
            <AboutSection />
            <ArticleSection />
            <InfoSection />
        {/* <section class="full-bleed">
            <img src="./assets/home-image-4.jpg" alt="rows of orange and blue seats">
        </section> */}
        {/* <section class="journey">
            <div class="wrapper">
                <div class="img-container">
                    <img src="./assets/home-image-5.jpg" alt="a girl with an sunglasses, an orange sweatshirt and jeans in front of a city building">
                </div>
                <article>
                    <h2>sophie's journey</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ut repudiandae voluptas, aliquid harum tempore maxime sequi ad? A aut magnam quisquam saepe maiores. A nisi vel adipisci quidem earum, dolore odit in quo tempora ipsam minus iusto necessitatibus repudiandae! Corrupti sit cumque dolor consequatur ipsa quam repellendus aut sapiente quasi, eaque delectus adipisci dicta!</p>
                    <button>
                        <a href="#">find out more</a>
                    </button>
                </article>
            </div>
        </section> */}
        {/* <section class="gallery">
            <div class="wrapper">
                <div class="gallery-container"><img src="./assets/home-image-6.jpg" alt="blue bicycle in front of an orange background"></div>
                <div class="gallery-container"><img src="./assets/home-image-7.jpg" alt="an orange building with an arch"></div>
                <div class="gallery-container"><img src="./assets/home-image-8.jpg" alt="the inside of an orange umbrella reading 'banana beach' looking up at a blue sky"></div>
            </div>
        </section> */}
    </main>
    )
}