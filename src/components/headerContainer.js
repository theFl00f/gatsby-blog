import React from 'react';

export default function HeaderContainer({ content }) {
    return (
        <div class="header-container">
            <div class="wrapper">
                <h1>{content}</h1>
            </div>
        </div>
    )
}