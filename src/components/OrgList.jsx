import React, { useState, useEffect } from 'react';
import { useFetching } from '../hooks/useFetching'
import OrgService from '../API/OrgService';
import { useNavigate } from 'react-router-dom';

const OrgList = ({orgs, deleteOrg}) => {
    const router = useNavigate();

    return (
       <ul className='list'>
            <li onClick={() => router('/')} className='orgItem' style={{marginTop: 20}}>Главная</li>
            {orgs.map(org => <li onClick={() => router('/org/' + org.id)} key={org.id} className='orgItem'>{org.name}</li>)}
       </ul>
    );
};

export default OrgList;