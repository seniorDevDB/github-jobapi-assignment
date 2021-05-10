import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];


let initialState = {
    jobData: {
        pending: false,
        success: false,
        error: false,
        page_number: 0,
        data: []
    },
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default store;