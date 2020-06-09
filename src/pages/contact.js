import React from 'react';
import Nav from '../components/nav';
import Header from '../layouts/header';
import HeaderContainer from '../components/headerContainer';
import Sidebar from '../layouts/sidebar';
import ContactMain from '../components/contactMain';

export default function Contact() {
    return (
        <Sidebar>
            <Header pageName="contact">
                <Nav/>
                <HeaderContainer content='get in touch'/>
            </Header>
            <ContactMain />
        </Sidebar>
    )
}