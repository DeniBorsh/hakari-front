import React, { useState } from 'react';
import OrgList from './OrgList';

const Navbar = ({isOpen, openModal}) => {
    return (
        <div className='navbar' style={{
            left: isOpen ? 0 : -250,
            right: isOpen ? 'calc(100% - 250px)' : 'calc(100% + 30px)'
        }}>
            <OrgList/>
            <button className='addButton' onClick={() => openModal()}>
                Добавить
                <svg className='plus' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" preserveAspectRatio="xMidYMid meet" width="16" height="16" aria-hidden="true"><path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path></svg>
            </button>
        </div>
    );
};

export default Navbar;