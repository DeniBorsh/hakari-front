import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Modal from './components/Modal';
import Navbar from './components/Navbar'

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App" onClick={(e) => {
      console.log(e.target)
    }}>
      <BrowserRouter>
        <header className='header'>
          <button className='navbar-button' onClick={() => setIsNavbarOpen(!isNavbarOpen)}>{isNavbarOpen ? '✕' : '≣'}</button>
          <span className='header-text'><span>Ai</span> Station</span>
        </header>
        <div style={{width: '100%', height: '48px'}}></div>
        <AppRouter/>
        <Navbar isOpen={isNavbarOpen} openModal={() => setIsModalOpen(true)}/>
        <Modal title="Добавить организацию" labelText="Название организации" inputPlaceholder="Введите название организации" isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>  
        <div style={{display: isNavbarOpen ? 'block' : 'none', position: 'fixed',zIndex: 6000, top:0,left:0,right:0,bottom:0}} onClick={() => setIsNavbarOpen(false)}></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
