import React from 'react';

export default function BlogComment({ imgSrc, imgAlt, dateContent, comment }) {
    return(
        <article>
        <div class="img-container">
            <img src={imgSrc} alt={imgAlt}/>
        </div>
        <div class="text-container">
            <p class="date">{dateContent}</p>
            <p>{comment}</p>
        </div>
    </article>
    )
}