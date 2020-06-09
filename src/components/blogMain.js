import React from 'react';
import Form from '../layouts/form';
import BlogContent from './blogContent';
import BlogComments from './blogComments';

export default function BlogMain() {
    return (
            <section class="blog">
                <BlogContent />
                <BlogComments />
                <Form buttonContent="post comment" />
            </section>
    )
}