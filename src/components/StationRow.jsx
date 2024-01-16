import React from 'react';

const StationRow = ({rowId, rowName}) => {
    return (
        <tr className='stationsRow'>
            <td><div>{rowName}</div></td>
            <td><div>{rowId}</div></td>
        </tr>
    );
};

export default StationRow;