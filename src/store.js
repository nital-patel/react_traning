import {createStore} from 'redux';
import reducers from './reducers';

let initialState = {
    repos: [],
    username: "abc"
};

export default createStore(reducers, initialState);