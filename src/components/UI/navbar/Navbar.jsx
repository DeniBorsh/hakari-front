import React, { useState } from 'react';
import cl from './Navbar.module.css'
import OrgList from '../org-list/OrgList';
import Modal from '../modal/Modal';

const Navbar = ({isOpen, openModal}) => {
    return (
        <div className={cl.navbar} style={{
            left: isOpen ? 0 : -250,
            right: isOpen ? 'calc(100% - 250px)' : '100%'
        }}>
            <OrgList/>
            <button className={cl.addButton} onClick={() => openModal()}>
                Добавить
                <svg className={cl.plus} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" preserveAspectRatio="xMidYMid meet" width="16" height="16" aria-hidden="true"><path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path></svg>
            </button>
        </div>
    );
};

export default Navbar;