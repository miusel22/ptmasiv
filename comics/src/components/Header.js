import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
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
    );
}