import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage, faUser, faDesktop, faPhone } from "@fortawesome/free-solid-svg-icons"
import InfoContainer from '../layouts/infoContainer';


export default function InfoSection() {
    return (
        <section class="info">
            <div class="wrapper">
                <InfoContainer 
                    iconSrc={faImage} 
                    title='photos' 
                    main='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur architecto eius voluptates odit vitae vel consequatur temporibus numquam, quibusdam?' 
                />
                <InfoContainer 
                    iconSrc={faUser} 
                    title='about' 
                    main='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui consequuntur, voluptate magnam, neque nobis rerum maxime, nemo inventore eos at necessitatibus.' 
                />
                <InfoContainer 
                    iconSrc={faDesktop} 
                    title='blog' 
                    main='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia veritatis eius corrupti aspernatur voluptates optio numquam mollitia cupiditate dolores iusto!' 
                />
                <InfoContainer 
                    iconSrc={faPhone}
                    title='get in touch'
                    main='Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eum perferendis laborum saepe cupiditate earum adipisci inventore distinctio nisi quis quisquam.'
                />
            </div>
        </section>
    )
}