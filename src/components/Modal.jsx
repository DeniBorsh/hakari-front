import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import StateContext from './StateContext';
import StateProvider from './StateProvider';

const Modal = ({title, labelText, inputPlaceholder, isOpen, setIsOpen, onSubmit, stationPosting = false}) => {
    const [name, setName] = useState('');
    const {isNavbarOpen, setIsNavbarOpen} = useContext(StateContext);
    const router = useNavigate()

    async function submitData()  {
        if (name !== '') {
            const data = await onSubmit(name);
            setIsOpen(false);
            setIsNavbarOpen(false);
            if (!stationPosting) router('/org/' + data.id);
        }
        else return
    }

    return (
        <div id='modal' className='modal' style={{visibility: isOpen ? 'visible' : 'hidden', opacity: isOpen ? 1 : 0}} onClick={(e) => {
            if (e.target.id === 'modal')
                setIsOpen(false);
            
        }}>
            <div className='modalForm' style={{top : isOpen ? 'calc(50vh - 150px)' : 'calc(50vh - 200px)'}}>
                <header>
                    <h2>{title}</h2>
                    <button onClick={() => setIsOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" preserveAspectRatio="xMidYMid meet" width="20" height="20" aria-hidden="true" className="bx--modal-close__icon"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
                    </button>
                </header>
                <div className='modalInput'>
                    <label htmlFor="modalInput">{labelText}</label>
                    <input onChange={(e) => setName(e.target.value)} required type="text" id='modalInput' placeholder={inputPlaceholder}/>
                </div>
                <div className='modalButtons'>
                    <button onClick={() => setIsOpen(false)} className='firstButton'>Отмена</button>
                    <button onClick={submitData} style={{backgroundColor: name !== '' ? '#0f62fe' : '#c6c6c6'}} className='secondButton'>Сохранить</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;