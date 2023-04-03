import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

export const Header = () => {
    return (
        <>
            <header id="main-header">
                <a id="logo-header">
                    <Link to="/">
                        <img src="https://www.freepnglogos.com/uploads/comic-logo-png/comic-pow-explosion-logo-9.png" width="120" />
                    </Link>
                </a>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/my-ratings">My Ratings</Link>
                        </li>
                    </ul>
                </nav>

            </header>
            <div class="wrapper run-animation" id="animate">
                <div class="logo">

                    <span class="marvel">The cami's comic</span>
                    <span class="studios">comics</span>

                </div>
            </div>
            <div class="images"></div>

        </>
    );
}