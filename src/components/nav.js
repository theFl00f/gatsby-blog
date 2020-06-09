import React from 'react';
import NavLink from './navLink';

export default function Nav() {
    return (
            <nav>
                <ul class="wrapper main-menu">
                    <li>
                        <a aria-hidden="true" href="#" title="Menu">&#9776;<span class="sr-only">Menu</span></a>
                        <ul class="nav">
                            <NavLink address='/'>                            
                                <h5>home</h5>
                            </NavLink>
                            <NavLink address="/#about">
                                <h5>about</h5>
                            </NavLink>
                            <NavLink address="/">
                                <h3>sophie</h3>
                            </NavLink>
                            <NavLink address='/blog/'>
                                <h5>blog</h5>
                            </NavLink>
                            <NavLink address="/contact/">
                                <h5>contact</h5>
                            </NavLink>
                        </ul>
                    </li>
                </ul>
            </nav>
    )
}