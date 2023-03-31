import React from 'react';
import { Link } from 'react-router-dom';
import '../header.css';
import Logo from '../img/shield.png';

export const Header = () => {
    return (
        <>
            <header id="main-header">
                <a id="logo-header">
                    <img src="https://www.freepnglogos.com/uploads/comic-logo-png/comic-pow-explosion-logo-9.png" width="120" />
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

                    <span class="marvel">The cami's</span>
                    <span class="studios">comics</span>

                </div>
            </div>
            <div class="images"></div>

        </>
    );
}