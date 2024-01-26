import React from 'react';

const StationRow = ({station}) => {
    return (
        <tr className='stationsRow' style={{backgroundColor: station.glasses < 5 ? '#ff000082': station.glasses < 15 ? '#ffcc0082': '#2bff0082'}}>
            <td><div>{station.name}</div></td>
            <td><div>{station.glasses}</div></td>
        </tr>
    );
};

export default StationRow;