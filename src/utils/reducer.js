import { createStore } from 'redux';

const initialState = {
    format: 'metric'
}

const SET_FORMAT = 'SET_FORMAT';

const mainReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_FORMAT:
            return {
                ...state,
                format: payload
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

export const store = createStore(mainReducer);