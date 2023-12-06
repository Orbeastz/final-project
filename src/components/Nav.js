import React from 'react';

const Nav = () => {
    return (
        <nav>
            {/*logo for little Lemon */}
            <a href='/'>
                <img src='../images/littleLemon.png' alt= 'little lemon logo'/>
            </a>
            {/* mobile navbar */}
            <ul>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </ul>
            {/* desktop navbar */}
            <ul>
               <li>
                <a href='/'>Home</a>
               </li>
               <li>
               <a href='/'>About</a>
               </li>
               <li>
               <a href='/'>Services</a>
               </li>
               <li>
               <a href='/'>Reservations</a>
               </li>
               <li>
               <a href='/'>Menu</a>
               </li>
               <li>
               <a href='/'>Order Online</a>
               </li>
               <li>
               <a href='/'>Login</a>
               </li>
            </ul>
        </nav>
    )
}

export default Nav;