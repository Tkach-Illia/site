import { createStore } from 'redux';

const defaultState = {
    postList: [],
    userLogin: "",
    status: false,
    isRefresh: false,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'set_postList':
            return {...state, postList: action.data};
        case 'set_userLogin':
            return {...state, userLogin: action.data.name, status: action.data.status};
        case 'set_isRefresh':
            return {...state, isRefresh: action.data};
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;