import {createStore} from 'redux';
import reducers from './reducers';

let initialState = {
    repos: [],
    username: ""
};

export default createStore(reducers, initialState);