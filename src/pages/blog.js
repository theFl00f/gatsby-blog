import React from 'react';
import Nav from '../components/nav';
import Header from '../layouts/header'
import HeaderContainer from '../components/headerContainer';
import Sidebar from '../layouts/sidebar';
import BlogMain from '../components/blogMain';
import Footer from '../components/footer';
import BlogAside from '../components/blogAside';

export default function Blog() {
    return (
        <Sidebar>
            <Header pageName="blog">
                <Nav/>
                <HeaderContainer content='blog'/>
            </Header>
            <main>
                <div class="wrapper">
                    <BlogAside />
                    <BlogMain />
                </div>
            </main>
            <Footer />
        </Sidebar>
        
    )
}