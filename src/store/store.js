import {combineReducers, createStore} from 'redux'

/**
 * reducer
 * @param state
 * @param action
 * @returns {string}
 */
function dispatchMsg(state = {}, action) {
    switch (action.type) {
        case 'INCREMENT':
            return  'INCREMENT';
        case 'DECREMENT':
            return 'DECREMENT';
        case 'redux':
            return 'redux';
        default:
            return state;
    }
}

/**
 * 合并reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
let reducer = combineReducers({dispatchMsg})
// 创建 Redux store 来存放应用的状态。 API 是 { subscribe, dispatch, getState }。
let store = createStore(reducer);

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() =>
    console.log(store.getState())
);

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});

export default store