import { useState } from 'react';
import './App.css';
import Navbar from './components/UI/navbar/Navbar';
import Modal from './components/UI/modal/Modal';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <header className='header'>
        <button className='navbar-button' onClick={() => setIsNavbarOpen(!isNavbarOpen)}>{isNavbarOpen ? '✕' : '≣'}</button>
        <span className='header-text'>AI Station</span>
      </header>
      <h1>Hello, World!</h1>
      <Navbar isOpen={isNavbarOpen} openModal={() => setIsModalOpen(true)}/>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
    </div>
  );
}

export default App;
