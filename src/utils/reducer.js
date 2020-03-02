import { createStore } from 'redux';

const initialState = {
    format: 'metric',
    cities: []
}

const SET_FORMAT = 'SET_FORMAT';
const ADD_CITY = 'ADD_CITY';
const REMOVE_CITY = 'REMOVE_CITY';
const SYNC_CITIES = 'SYNC_CITIES';

const mainReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_FORMAT:
            return {
                ...state,
                format: payload
            }
        case SYNC_CITIES:
            return {
                ...state,
                cities: payload
            }
        case ADD_CITY:
            return {
                ...state,
                cities: state.cities ? [...state.cities, payload] : [payload]
            }
        case REMOVE_CITY:
            return {
                ...state,
                cities: state.cities.filter(city => city.id !== payload)
            }
        default:
            return state;
    }
}

// ACTIONS:

export const setFormat = (payload) => {
    return {
        type: SET_FORMAT,
        payload
    }
};

export const syncCities = (payload) => {
    return {
        type: SYNC_CITIES,
        payload
    }
};

export const addCity = (payload) => {
    return {
        type: ADD_CITY,
        payload
    }
};

export const removeCity = (payload) => {
    return {
        type: REMOVE_CITY,
        payload
    }
};

export const store = createStore(mainReducer);