import React, {useState, useContext} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Modal from './components/Modal';
import Navbar from './components/Navbar'
import OrgService from './API/OrgService';
import StateContext from './components/StateContext';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isNavbarOpen, setIsNavbarOpen } = useContext(StateContext);
  return (
    <div className="App">
      <BrowserRouter>
        <header className='header'>
          <button className='navbar-button' onClick={() => setIsNavbarOpen(!isNavbarOpen)}>{isNavbarOpen ? '✕' : '≣'}</button>
          <span className='header-text'><span>Ai</span> Station</span>
        </header>
        <div style={{width: '100%', height: '48px'}}></div>
        <AppRouter/>
        <Navbar openModal={() => setIsModalOpen(true)}/>
        <Modal onSubmit={(orgName) => {
            const data = OrgService.postOrg(orgName);
            return data;
        }} 
          title="Добавить организацию" 
          labelText="Название организации" 
          inputPlaceholder="Введите название организации" 
          isOpen={isModalOpen} 
          setIsOpen={setIsModalOpen}
        />  
        <div style={{display: isNavbarOpen ? 'block' : 'none', position: 'fixed',zIndex: 6000, top:0,left:0,right:0,bottom:0}} onClick={() => setIsNavbarOpen(false)}></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
