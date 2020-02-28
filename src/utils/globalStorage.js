// CRUD in reduser and browser session/local storage

import { store, setFormat } from './reducer';

export const STORAGE = window.sessionStorage;

export function changeFormat(newFormat) {
    store.dispatch(setFormat(newFormat));
    STORAGE.setItem('format', newFormat);
}
