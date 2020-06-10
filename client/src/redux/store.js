import {createStore, combineReducers} from 'redux';
import itemsReducer from './items/itemsReducer';

const rootReducers = combineReducers({
    items: itemsReducer
});

const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;