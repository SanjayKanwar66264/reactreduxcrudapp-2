import {FETCH_APPLICATION_LIST} from '../actions/index'

const INITIAL_STATE = {all: [], post: null};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_APPLICATION_LIST:
            return {...state, all: action.payload.data};
        default:
            return state;
    }
}