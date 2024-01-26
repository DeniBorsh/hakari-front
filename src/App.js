import React, {useState, useContext, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Modal from './components/Modal';
import Navbar from './components/Navbar'
import OrgService from './API/OrgService';
import StateContext from './components/StateContext';
import { useFetching } from './hooks/useFetching';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isNavbarOpen, setIsNavbarOpen } = useContext(StateContext);
  const [orgs, setOrgs] = useState([]);

  const [fetchOrgs, isFetchLoading, fetchErr] = useFetching(async () => {
    const _orgs = await OrgService.fetchOrgs();
    setOrgs(_orgs);
  })

  const postOrg = async (orgName) => {
    try {
        const data = await OrgService.postOrg(orgName);
        fetchOrgs();
        return data;
    } catch (error) {
        console.error("Ошибка при создании организации:", error);
    }
  }

  const deleteOrg = async (id) => {
    const response = await OrgService.deleteOrganization(id);
    console.log(response);
    fetchOrgs();
  }


  useEffect(() => {
    fetchOrgs();
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <header className='header'>
          <button className='navbar-button' onClick={() => setIsNavbarOpen(!isNavbarOpen)}>{isNavbarOpen ? '✕' : '≣'}</button>
          <span className='header-text'><span>Ai</span> Station</span>
        </header>
        <div style={{width: '100%', height: '48px'}}></div>
        <AppRouter/>
        <Navbar orgs={orgs} openModal={() => setIsModalOpen(true)} deleteOrg={deleteOrg}/>
        <Modal onSubmit={postOrg} 
          title="Добавить организацию" 
          labelText="Название организации" 
          inputPlaceholder="Введите название организации" 
          isOpen={isModalOpen} 
          setIsOpen={setIsModalOpen}
        />  
        <div className='navbarCloser' style={{display: isNavbarOpen ? 'block' : 'none'}} onClick={() => setIsNavbarOpen(false)}></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
