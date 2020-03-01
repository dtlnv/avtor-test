import React from 'react';
import './_styles.css';
import { changeFormat } from '../../utils/globalStorage';
import { useSelector } from 'react-redux';

/**
 * metric - Celsius
 * imperial - Fahrenheit
 */

const FormatSelect = () => {
    const defaultFormat = useSelector(state => state.format);

    const changeFormatHandle = e => {
        changeFormat(e.target.value)
    }

    return (
        <select className="formatSelect" onChange={changeFormatHandle} defaultValue={defaultFormat}>
            <option value="metric">°C</option>
            <option value="imperial">°F</option>
        </select>
    );
}

export default FormatSelect;