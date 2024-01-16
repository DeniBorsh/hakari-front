import React, { useState, useEffect } from 'react';
import { useFetching } from '../hooks/useFetching'
import OrgService from '../API/OrgService';
import { useNavigate } from 'react-router-dom';

const OrgList = () => {
    const [orgs, setOrgs] = useState([]);
    const router = useNavigate();

    const [fetchOrgs, isOrgsLoading, orgsError] = useFetching(async () => {
        const response = await OrgService.getAll()
        setOrgs(response)
    })

    useEffect(() => {
        fetchOrgs();
        setOrgs([...orgs, {id:8,title:'nig'}])
    }, [])

    return (
       <ul className='list'>
            <li onClick={() => router('/')} className='orgItem' style={{marginTop: 20}}>Главная</li>
            {orgs.map(org => <li onClick={() => router('/org/' + org.id)} key={org.id} className='orgItem'>{org.id}: {org.title}</li>)}
       </ul>
    );
};

export default OrgList;