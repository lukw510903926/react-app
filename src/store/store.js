import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {logger} from 'redux-logger'

import reducers from './reducers'

let store = createStore(
    reducers,
    applyMiddleware(logger),
    composeWithDevTools(applyMiddleware(thunk)) // 应用上异步中间件
);

store.subscribe(()=>console.log(store.getState()));

// 根据counter函数创建store对象
export default store