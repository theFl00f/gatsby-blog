import React from 'react';
import Nav from '../components/nav';
import Header from '../layouts/header'
import HeaderContainer from '../components/headerContainer';
import Sidebar from '../layouts/sidebar';

export default function Blog() {
    return (
        <Sidebar>
            <Header pageName="blog">
                <Nav/>
                <HeaderContainer content='blog'/>
            </Header>
        </Sidebar>
    )
}