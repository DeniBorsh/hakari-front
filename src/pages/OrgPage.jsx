import React, { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import OrgService from '../API/OrgService';
import { useParams } from 'react-router-dom';
import StationsTable from '../components/StationsTable';
import Modal from '../components/Modal';

const OrgPage = () => {
    const params = useParams();
    const [stations, setStations] = useState([]);
    const [org, setOrg] = useState([]);
    const [is1ModalOpen, setIs1ModalOpen] = useState(false);
    const [is2ModalOpen, setIs2ModalOpen] = useState(false);

    const [fetchOrgBy, isOrgLoading, orgError] = useFetching(async (_params) => {
        const respone = await OrgService.getById(_params);
        return respone;
    })

    useEffect(() => {
        const response = fetchOrgBy(params);
        console.log(response);
        // setStations([{id: 4, stationName: "Test Station TH"}]);
        
    }, [])

    return (
        <div>
            <h1 className="orgHeader">{org.title || "ORG"}</h1>
            <div className='orgButtons'>
                <button onClick={() => setIs1ModalOpen(true)}>Добавить стэйшн</button>
                <button onClick={() => setIs2ModalOpen(true)}>Привязать камеру</button>
            </div>
            <Modal title="Добавить стейшн" labelText="Название стейшена" inputPlaceholder="Введите название стейшна..." isOpen={is1ModalOpen} setIsOpen={setIs1ModalOpen}/>
            <Modal title="Привязать камеру" labelText="URL IP камеры" inputPlaceholder="rtsp://..." isOpen={is2ModalOpen} setIsOpen={setIs2ModalOpen} cameraModal={true} stations={stations}/>
            <StationsTable stations={stations}/>
        </div>
    );
};

export default OrgPage;