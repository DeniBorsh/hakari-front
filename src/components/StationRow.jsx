import React from 'react';

const StationRow = ({station}) => {
    return (
        <tr className='stationsRow'>
            <td><div>{station.name}</div></td>
            <td><div>{station.glasses}</div></td>
        </tr>
    );
};

export default StationRow;