import React, { useContext, useState } from 'react';
import Select from './UI/Select';
import StateContext from './StateContext';

const CameraModal = ({onSubmit, title="Привязать камеру", labelText="URL IP камеры", inputPlaceholder="rtsp://...", isOpen, setIsOpen, stations}) => {
    const [stationId, setStationId] = useState("")
    const [cameraUrl, setCameraUrl] = useState(false);
    const [isSubmitAllowed, setIsSubmitAllowed] = useState(false);
    const {isNavbarOpen, setIsNavbarOpen} = useContext(StateContext);

    function checkAllowment(val, stationSelect=false) {
        stationSelect 
        ? setIsSubmitAllowed(cameraUrl.length > 0 && val.length > 0)
        : setIsSubmitAllowed(stationId.length > 0 && val.length > 0)
    }

    async function submitData()  {
        if (stationId !== '') {
            const data = await onSubmit(stationId, cameraUrl);
            console.log(data);
            setIsOpen(false);
            setIsNavbarOpen(false);
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
                    <label htmlFor="modalSelect">Стейшн</label>
                    <Select
                        value={stationId}
                        onChange={val => {setStationId(val); checkAllowment(val, true)}}
                        defaultValue="Выберите стэйшн"
                        options={stations}
                    />
                </div>
                <div className='modalInput'>
                    <label htmlFor="modalInput">{labelText}</label>
                    <input onChange={(e) => {setCameraUrl(e.target.value); checkAllowment(e.target.value);}} required type="text" id='modalInput' placeholder={inputPlaceholder}/>
                </div>
                <div className='modalButtons'>
                    <button onClick={() => setIsOpen(false)} className='firstButton'>Отмена</button>
                    <button onClick={submitData} style={{backgroundColor: isSubmitAllowed ? '#0f62fe' : '#c6c6c6'}} className='secondButton'>Привязать</button>
                </div>
            </div>
        </div>
    );
};

export default CameraModal;