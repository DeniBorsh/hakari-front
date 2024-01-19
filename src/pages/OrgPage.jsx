import React, { useContext, useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import OrgService from '../API/OrgService';
import { useParams } from 'react-router-dom';
import StationsTable from '../components/StationsTable';
import Modal from '../components/Modal';
import CameraModal from '../components/CameraModal';
import StateContext from '../components/StateContext';

const OrgPage = () => {
    const params = useParams();
    const [stations, setStations] = useState([]);
    const [org, setOrg] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
    const {isNavbarOpen, setIsNavbarOpen} = useContext(StateContext);

    const [getById, isLoading, err] = useFetching(async (id) => {
        const response = await OrgService.getById(id);
        setOrg(response.organization);
        setStations(response.stations);
    })

    useEffect(() => {
        getById(params.id);
        setIsNavbarOpen(false);
    }, [params.id])

    const postStation = async (stationName) => {
        try {
            const data = await OrgService.postStation(params.id, stationName);
            getById(params.id);
            return data;
        } catch (error) {
            console.error("Ошибка при добавлении станции:", error);
        }
    }

    const postCamera = async (stationId, cameraUrl) => {
        try {
            const data = await OrgService.postCamera(stationId, cameraUrl);
            return data;
        } catch (error) {
            console.error("Ошибка при привязке камеры:", error);
        }
    }

    return (
        <div>
            <h1 className="orgHeader">{org.name || "NOT FOUND"}</h1>
            <div className='orgButtons'>
                <button onClick={() => setIsModalOpen(true)}>Добавить стэйшн</button>
                <button onClick={() => setIsCameraModalOpen(true)}>Привязать камеру</button>
            </div>
            <Modal 
                onSubmit={postStation}
                title="Добавить стейшн" 
                labelText="Название стейшена" 
                inputPlaceholder="Введите название стейшна..." 
                isOpen={isModalOpen} 
                setIsOpen={setIsModalOpen}
            />
            <CameraModal 
                onSubmit={postCamera}
                isOpen={isCameraModalOpen}
                setIsOpen={setIsCameraModalOpen}
                stations={stations}
            />
            <StationsTable stations={stations}/>
        </div>
    );
};

export default OrgPage;