import React from 'react';
import cl from './Modal.module.css'

const Modal = ({isOpen, setIsOpen}) => {
    return (
        <div className={cl.modal} style={{visibility: isOpen ? 'visible' : 'hidden'}}>
            <div className={cl.modalForm}>
                <header>
                    <h2>Добавить организацию</h2>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" preserveAspectRatio="xMidYMid meet" width="20" height="20" aria-hidden="true" className="bx--modal-close__icon"><path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path></svg>
                    </button>
                </header>
                <div className={cl.modalInput}>
                    <label htmlFor="modalInput">Название организации</label>
                    <input type="text" id='modalInput' placeholder='Введите название организации'/>
                </div>
                <div className={cl.modalButtons}>
                    <button onClick={() => setIsOpen(false)} className={cl.firstButton}>Отмена</button>
                    <button className={cl.secondButton}>Сохранить</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;