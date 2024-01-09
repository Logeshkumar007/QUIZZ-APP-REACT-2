import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div className='outer'>
            
            <ul className='items1'>
                <li className='item'></li>
            </ul>
            <ul className='items2'>
                <li className='item'>Home</li>
                <li className='item'>LeaderBorad</li>
                <li className='item'>Feedback</li>
                <li className='item'>contact</li>
            </ul>
        </div>
    );
}

export default Navbar;
