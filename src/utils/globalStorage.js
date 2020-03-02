// CRUD in reduser and browser session/local storage

import { store, setFormat, syncCities, addCity, removeCity } from './reducer';

// localStorage or sessionStorage
const STORAGE = window.localStorage; 

/**
 * @name changeFormat
 * @description Set new global format (for temperature and speed)
 * @param {string} newFormat 
 */
export function changeFormat(newFormat) {
    store.dispatch(setFormat(newFormat));
    STORAGE.setItem('format', newFormat);
}

/**
 * @name addCityHandle
 * @description Append new city for following to current storage
 * @param {object} newCity 
 */
export function addCityHandle(newCity) {
    store.dispatch(addCity(newCity));
    STORAGE.setItem('cities', JSON.stringify(store.getState().cities));
}

/**
 * @name removeCityHandle
 * @description Remove city from the storage
 * @param {number|string} id 
 */
export function removeCityHandle(id) {
    store.dispatch(removeCity(id));
    STORAGE.setItem('cities', JSON.stringify(store.getState().cities));
}

/**
 * @name syncApp
 * @description Add data from the Storage to Redux
 */
export function syncApp() {
    const format = STORAGE.getItem('format');
    store.dispatch(setFormat(format));

    const cities = STORAGE.getItem('cities');
    store.dispatch(syncCities(JSON.parse(cities)));
}