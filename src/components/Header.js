import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family Owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking"><button aria-label='on Click'>Reserve Table</button></Link>
                </div>
                <div className='banner-img'> 
                    <img src='./images/french-chef.png' alt="chef picture" />
                </div>
            </section>
        </header>
    )
}

export default Header;