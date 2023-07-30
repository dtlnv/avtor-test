import { createStore } from 'redux';

const initialState = {
    format: 'metric',
    cities: [],
    showCurrentCity: true,
};

const SET_FORMAT = 'SET_FORMAT';
const SET_CITIES = 'SET_CITIES';
const SET_SHOW_CURRENT_CITY = 'SET_SHOW_CURRENT_CITY';

const mainReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_FORMAT:
            return {
                ...state,
                format: payload
            }
        case SET_CITIES:
            return {
                ...state,
                cities: payload
            }
        case SET_SHOW_CURRENT_CITY:
          return {
            ...state,
            showCurrentCity: payload,
          };
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

export const setCities = (payload) => {
    return {
        type: SET_CITIES,
        payload
    }
};

export const setShowCurrentCity = (payload) => {
  return {
    type: SET_SHOW_CURRENT_CITY,
    payload,
  };
};

export const store = createStore(mainReducer);
