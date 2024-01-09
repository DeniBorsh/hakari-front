import React, { useState } from 'react';
import cl from './Navbar.module.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);

    return (
        <div className={cl.navbarContainer}>
            <button onClick={() => setIsOpen(!isOpen)}>X</button>
            <div className={isOpen ? cl.navbarOpen : cl.navbar}></div>
        </div>
    );
};

export default Navbar;