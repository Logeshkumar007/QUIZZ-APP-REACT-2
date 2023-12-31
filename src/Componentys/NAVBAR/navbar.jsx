import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className='outer'>
            
            <ul className='items1'>
                <li className='item'>RESUME</li>
            </ul>
            <ul className='items2'>
                <li className='item'>Home</li>
                <li className='item'>About Me</li>
                <li className='item'>Education</li>
                <li className='item'>Certification</li>
                <li className='item'>contact</li>
            </ul>
        </div>
    );
}

export default Navbar;
