const { useDispatch } = require('react-redux');
const { STORAGE } = require('./constants');
const { store, setFormat, setCities } = require('./reducer');

/**
 * @name useAppSync
 * @description Add data from the Storage to Redux
 */
export function useAppSync() {
    // sync format between storage and redux
    const format = STORAGE.getItem('format');
    store.dispatch(setFormat(format));

    // sync cities between storage and redux
    const cities = STORAGE.getItem('cities');
    store.dispatch(setCities(JSON.parse(cities || '[]')));
}

/**
 * @name useSaveFormat
 * @description Set new global format (will calculate temperature and speed)
 * @param {string} newFormat 
 */
export const useSaveFormat = () => {
    const dispatch = useDispatch();

    return newFormat => {
        dispatch(setFormat(newFormat));
        STORAGE.setItem('format', newFormat);
    }
}

/**
 * @name useSaveCity
 * @description Append new city for following to the storage or remove city from the storage
 * @param {string} city 
 * @param {enum} action - [add, remove]
 */
export const useSaveCity = () => {
    const dispatch = useDispatch();

    return (city, action) => {
        let citiesList = JSON.parse(STORAGE.getItem('cities') || '[]');

        if (action === 'add') {
            if (!citiesList.find(savedCity => savedCity.id === city.id)) {
                citiesList.push(city);
            }
        } else {
            if (citiesList.find(savedCity => savedCity.id === city.id)) {
                citiesList = citiesList.filter(savedCity => savedCity.id !== city.id);
            }
        }

        dispatch(setCities(citiesList));
        STORAGE.setItem('cities', JSON.stringify(citiesList));
    }
}
