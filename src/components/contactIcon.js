import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactIcon({ linkTarget, iconSrc, srText }) {
    return (
        <li>
            <a href={linkTarget}>
                <FontAwesomeIcon icon={iconSrc}/>
                <span class="sr-only">{srText}</span>
            </a>
        </li>
    )
}