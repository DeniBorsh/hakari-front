import React, { useContext, useEffect } from 'react';
import StateContext from '../components/StateContext';

const MainPage = () => {
    const {isNavbarOpen, setIsNavbarOpen} = useContext(StateContext);

    useEffect(() => {
        setIsNavbarOpen(false);
    }, [])

    return (
        <div>
            <h1>Main Page</h1>
        </div>
    );
};

export default MainPage;