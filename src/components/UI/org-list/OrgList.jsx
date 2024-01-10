import React, { useState, useEffect } from 'react';
import cl from './OrgList.module.css'
import { useFetching } from '../../../hooks/useFetching'
import OrgService from '../../../API/OrgService';

const OrgList = () => {
    const [orgs, setOrgs] = useState([]);

    const [fetchOrgs, isOrgsLoading, orgsError] = useFetching(async () => {
        const response = await OrgService.getAll()
        setOrgs([...orgs, ...response.data])
    })

    useEffect(() => {
        fetchOrgs()
    }, [])

    return (
       <ul className={cl.list}>
            <li className={cl.orgItem} style={{marginTop: 20}}>Главная</li>
            {orgs.map(org => <li key={org.id} className={cl.orgItem}>{org.id}: {org.title}</li>)}
       </ul>
    );
};

export default OrgList;