import { createStore } from 'redux';

const initialState = {
    authed: false,
    user: {},
    classes: [],
    disciplines: [],
    tags: [],
    currentClassId: null
}

const SET_AUTHED = 'SET_AUTHED';
const SET_USER = 'SET_USER';
const SET_CLASSES = 'SET_CLASSES';
const SET_DISCIPLINES = 'SET_DISCIPLINES';
const SET_TAGS = 'SET_TAGS';
const SET_CURRENT_CLASS_ID = 'SET_CURRENT_CLASS_ID';

const mainReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_AUTHED:
            return {
                ...state,
                authed: payload
            }
        case SET_USER:
            return {
                ...state,
                user: payload
            }
        case SET_CLASSES:
            return {
                ...state,
                classes: payload
            }
        case SET_DISCIPLINES:
            return {
                ...state,
                disciplines: payload
            }
        case SET_TAGS:
            return {
                ...state,
                tags: payload
            }
        case SET_CURRENT_CLASS_ID:
            return {
                ...state,
                currentClassId: payload
            }
        default:
            return state;
    }
}

// ACTIONS:

export const toggleAuthed = (payload) => {
    return {
        type: SET_AUTHED,
        payload
    }
};

export const setUser = (payload) => {
    return {
        type: SET_USER,
        payload
    }
};

export const setClasses = (payload) => {
    return {
        type: SET_CLASSES,
        payload
    }
};

export const setDisciplines = (payload) => {
    return {
        type: SET_DISCIPLINES,
        payload
    }
};

export const setTags = (payload) => {
    return {
        type: SET_TAGS,
        payload
    }
};

export const setCurrentClassId = (payload) => {
    return {
        type: SET_CURRENT_CLASS_ID,
        payload
    }
};

export const store = createStore(mainReducer);