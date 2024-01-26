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
    const [org, setOrg] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
    const [shouldPlaySound, setShouldPlaySound] = useState(false);
    const [shouldBePlayingSound, setShouldBePlayingSound] = useState(false);
    const {isNavbarOpen, setIsNavbarOpen} = useContext(StateContext);
    const audio = new Audio("/audio/bruh.mp3");


    const [getById, isLoading, err] = useFetching(async (id) => {
        const response = await OrgService.getById(id);
        setOrg(response.organization);
        setStations(response.stations);
    });

    useEffect(() => {
        getById(params.id);
        setIsNavbarOpen(false);
        const interval = setInterval(() => {
            getById(params.id);
        }, 3000);
        return () => clearInterval(interval);
    }, [params.id]);

    useEffect(() => {
        const playSound = stations.some(station => station.glasses < 15);
        setShouldPlaySound(playSound);
        const bePlayingSound = stations.some(station => station.glasses < 5);
        setShouldBePlayingSound(bePlayingSound);
    }, [stations]);
    
    useEffect(() => {
        if (shouldPlaySound) audio.play();
        const playAudioInterval = shouldBePlayingSound ? setInterval(() => audio.play(), 60000) : null;
        return () => {if (playAudioInterval) clearInterval(playAudioInterval)};
    }, [shouldPlaySound, shouldBePlayingSound]); 


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