import React from 'react';
import cl from './Select.module.css'

const Select = ({options, defaultValue, value, onChange}) => {
    return (
        <select className={cl.mySelect} value={value} onChange={e => onChange(e.target.value)}>
            <option value="">{defaultValue}</option>
            {options.map(opt => 
                <option key={opt.id} value={opt.stationName}>{opt.stationName}</option>  
            )}
        </select>
    );
};

export default Select;