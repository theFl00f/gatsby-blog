import React from 'react';

export default function Header({ children, pageName }) {
    return (
        <header className={pageName}>
            {children}
        </header>
    )
}