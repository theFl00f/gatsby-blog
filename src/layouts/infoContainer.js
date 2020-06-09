import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function InfoContainer({ iconSrc, title, main }) {
    return (
        <div class="info-container">
            <div class="icon-container">
                <FontAwesomeIcon icon={iconSrc}/>
            </div>
            <h3>{title}</h3>
            <p>{main}</p>
        </div>
    )
}