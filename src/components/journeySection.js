import React from 'react';
import Button from './button';

import journeyImg from '../assets/home-image-5.jpg'

export default function JourneySection() {
    return (
        <section class="journey">
        <div class="wrapper">
            <div class="img-container">
                <img src={journeyImg} alt="a girl with an sunglasses, an orange sweatshirt and jeans in front of a city building"/>
            </div>
            <article>
                <h2>sophie's journey</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ut repudiandae voluptas, aliquid harum tempore maxime sequi ad? A aut magnam quisquam saepe maiores. A nisi vel adipisci quidem earum, dolore odit in quo tempora ipsam minus iusto necessitatibus repudiandae! Corrupti sit cumque dolor consequatur ipsa quam repellendus aut sapiente quasi, eaque delectus adipisci dicta!</p>
                <Button content='find out more' />
            </article>
        </div>
    </section>
    )
}