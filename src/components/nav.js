import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
    return (
            <nav>
                <ul class="wrapper main-menu">
                    <li>
                        <a aria-hidden="true" href="#" title="Menu">&#9776;<span class="sr-only">Menu</span></a>
                        <ul class="nav">
                            <li>
                                <Link to="/">
                                    <h5>home</h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/#about">
                                    <h5>about</h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <h3>sophie</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog">
                                    <h5>blog</h5>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <h5>contact</h5>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
    )
}