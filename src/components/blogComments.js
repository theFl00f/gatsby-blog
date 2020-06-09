import React from 'react';
import BlogComment from './blogComment';
import commentImg1 from '../assets/blog-image-3.jpg'
import commentImg2 from '../assets/blog-image-4.jpg'

export default function BlogComments() {
    return (
        <div class="comments">
            <BlogComment 
                imgSrc={commentImg1}
                imgAlt="a headshot of a man"
                dateContent="Tuesday October 9th, 2018 by Jeremy"
                comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, pariatur vel. Impedit, sit. Praesentium, officia veniam? Quam libero pariatur hic excepturi adipisci error eos, eaque dignissimos et, doloribus qui ad lorem ipsum dolor sit."
            />
            <BlogComment 
                imgSrc={commentImg2}
                imgAlt="a headshot of a woman"
                dateContent="Wednesday October 10th, 2018 by Julia"
                comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt ratione eos corrupti totam doloremque ab est, impedit asperiores, velit expedita commodi iste quasi autem!"
            />
        </div>
    )
}