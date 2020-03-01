// CRUD in reduser and browser session/local storage

import { store, setFormat } from './reducer';

const STORAGE = window.sessionStorage;

export function changeFormat(newFormat) {
    store.dispatch(setFormat(newFormat));
    STORAGE.setItem('format', newFormat);
}


export function syncStorageAndReducer() {
    const format = STORAGE.getItem('format');
    store.dispatch(setFormat(format));
}