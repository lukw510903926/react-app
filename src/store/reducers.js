import { combineReducers } from 'redux'

import {
    ADD_COMMENT,
    DELETE_COMMENT,
    RECEIVE_COMMENTS,
    ADD_USER
} from './action-types'

const initComments = [];

function comments(action, state = initComments) {
    switch (action.type) {
        case ADD_COMMENT:
            return [...state, action.data];
        case DELETE_COMMENT:
            return state.filter((c, index) => index !== action.data);
        case RECEIVE_COMMENTS:
            return action.data;
        default:
            return state
    }
}

let initList = [{ 'username': '张三', 'age': 20, created: Date.now() }, { 'username': '李四', 'age': 30, created: Date.now() + 1 }];

function userList(action, state = initList) {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.data];
        default:
            return state
    }
}

export default combineReducers({
    comments, userList
})