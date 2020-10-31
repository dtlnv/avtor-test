const { useDispatch } = require('react-redux');
const { STORAGE } = require('./constants');
const { store, setFormat, setCities } = require('./reducer');

/**
 * @name useAppSync
 * @description Add data from the Storage to Reducer
 */
export function useAppSync() {
    // sync format between storage and reducer
    const format = STORAGE.getItem('format');
    store.dispatch(setFormat(format));

    // sync cities between storage and reducer
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
 * @name useAddCity
 * @description Add a new city for following to the storage 
 * @param {object} city 
 */
export const useAddCity = () => {
    const dispatch = useDispatch();

    return (city) => {
        let citiesList = JSON.parse(STORAGE.getItem('cities') || '[]');

        if (!citiesList.find(savedCity => savedCity.id === city.id)) {
            citiesList.push(city);
        }

        dispatch(setCities(citiesList));
        STORAGE.setItem('cities', JSON.stringify(citiesList));
    }
}

/**
 * @name useRemoveCity
 * @description Remove city from the storage
 * @param {number} cityId 
 */
export const useRemoveCity = () => {
    const dispatch = useDispatch();

    return (cityId) => {
        let citiesList = JSON.parse(STORAGE.getItem('cities') || '[]');

        if (citiesList.find(savedCity => savedCity.id === cityId)) {
            citiesList = citiesList.filter(savedCity => savedCity.id !== cityId);
        }

        dispatch(setCities(citiesList));
        STORAGE.setItem('cities', JSON.stringify(citiesList));
    }
}
