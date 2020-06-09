import React from 'react';
import sophieImg from '../assets/home-image-1.jpg'

export default function BlogAside() {
    return (
        <aside>
            <article class="about">
                <div class="img-container">
                    <img src={sophieImg} alt="a girl named Sophie with halved oranges in front of her eyes with her tongue sticking out on yellow background"/>
                </div>
                <div class="about-text">                    
                    <h4>about sophie</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus? <a href="#">Find out more.</a></p>
                </div>
            </article>
            <article class="recent-posts">
                <h4>recent posts</h4>
                <ul>
                    <li><a href="#">Lorem ipsum dolor sit amet.</a></li>
                    <li><a href="#">Lorem ipsum dolor sit.</a></li>
                    <li><a href="#">Placeat illum exercitation ab?</a></li>
                    <li><a href="#">Delen magnam quos aperiam!</a></li>
                </ul>
            </article>            
        </aside>
    )
}