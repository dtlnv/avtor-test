import React from 'react';
import './_styles.css';
import { STORAGE, changeFormat } from '../../utils/globalStorage';

/**
 * standard - Kelvin
 * metric - Celsius
 * imperial - Fahrenheit
 */

const FormatSelect = () => {
    const changeFormatHandle = e => {
        changeFormat(e.target.value)
    }

    return (
        <select className="formatSelect" onChange={changeFormatHandle} defaultChecked={STORAGE.getItem('format')}>
            <option value="metric">°C</option>
            <option value="imperial">°F</option>
            <option value="standard">K</option>
        </select>
    );
}

export default FormatSelect;