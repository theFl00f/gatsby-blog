import React from 'react';
import { Link } from 'gatsby';


export default function NavLink({ address, children }) {
    return (
        <li>
            <Link to={address}>
                {children}
            </Link>
        </li>
    )
}