import React, { useState, useEffect } from 'react';
import { useFetching } from '../hooks/useFetching'
import OrgService from '../API/OrgService';
import { useNavigate } from 'react-router-dom';

const OrgList = () => {
    const [orgs, setOrgs] = useState([]);
    const router = useNavigate();

    useEffect(async () => {
        const _orgs = await OrgService.fetchOrgs();
        setOrgs(_orgs);
    }, [])

    return (
       <ul className='list'>
            <li onClick={() => router('/')} className='orgItem' style={{marginTop: 20}}>Главная</li>
            {orgs.map(org => <li onClick={() => router('/org/' + org.id)} key={org.id} className='orgItem'>{org.name}</li>)}
       </ul>
    );
};

export default OrgList;