import React from 'react';
import StationRow from './StationRow';

const StationsTable = ({stations}) => {
    return (
        <table className='stationsTable'>
            <thead>
                <tr>
                    <th scope='col'><div>Название</div></th>
                    <th scope='col'><div>Количество бокалов</div></th>
                </tr>
            </thead>
            <tbody aria-live='polite'>
                {stations.map(station => <StationRow station={station}/>)}
            </tbody>
        </table>
    );
};

export default StationsTable;