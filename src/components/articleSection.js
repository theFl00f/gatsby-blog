import React from 'react';

import articleImg1 from '../assets/home-image-2.jpg'
import articleImg2 from '../assets/home-image-3.jpg'
import Button from './button';

export default function ArticleSection() {
    return (
        <section class="article-links">
        <div class="wrapper">
            <article class="article1">
                <div class="article-img-container img1">
                    <img src={articleImg1} alt="a dog with his head hanging out an orange vintage vehicle"/>
                </div>
                <div class="article-text-container">
                    <h3>sophie's favourite things</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quaerat, dolor ut exercitationem libero id dignissimos quia facere unde. Hic aliquam animi esse maxime temporibus nemo numquam.</p>
                    <Button content='read more'/>
                </div>
            </article>
            <article class="article2">
                <div class="article-text-container">
                    <h3>where she's travelled</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae veritatis natus sit laboriosam quam sequi commodi? Dolore est ipsam unde, recusandae velit, corrupti, et laborum quasi ut rerum provident enim!</p>
                    <Button content='read more'/>
                </div>
                <div class="article-img-container img2">
                    <img src={articleImg2} alt="a sandy beach with blue chairs and orange umbrellas."/>
                </div>
            </article>
        </div>
    </section>
    )
}