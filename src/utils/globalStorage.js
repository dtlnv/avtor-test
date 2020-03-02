// CRUD in reduser and browser session/local storage

import { store, setFormat, syncCities, addCity, removeCity } from './reducer';

const STORAGE = window.localStorage;

export function changeFormat(newFormat) {
    store.dispatch(setFormat(newFormat));
    STORAGE.setItem('format', newFormat);
}

export function addCityHandle(newCity) {
    store.dispatch(addCity(newCity));
    STORAGE.setItem('cities', JSON.stringify(store.getState().cities));
}

export function removeCityHandle(id) {
    store.dispatch(removeCity(id));
    STORAGE.setItem('cities', JSON.stringify(store.getState().cities));
}

export function syncStorageAndReducer() {
    const format = STORAGE.getItem('format');
    store.dispatch(setFormat(format));

    const cities = STORAGE.getItem('cities');
    store.dispatch(syncCities(JSON.parse(cities)));
}