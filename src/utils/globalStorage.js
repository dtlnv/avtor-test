// CRUD in reduser and browser session/local storage

import { store, setFormat } from './reducer';

const STORAGE = window.localStorage;

export function changeFormat(newFormat) {
    store.dispatch(setFormat(newFormat));
    STORAGE.setItem('format', newFormat);
}


export function syncStorageAndReducer() {
    const format = STORAGE.getItem('format');
    store.dispatch(setFormat(format));
}