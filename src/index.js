
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import actions from './actions/constants';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
    
registerServiceWorker();

store.subscribe(() => {
    console.log(store.getState())
});

/*function changeUser(value) {
    return {
        type: actions.CHANGE_USERNAME,
        data: {
            value
        }
    } 
}

store.dispatch(changeUser("o"));
store.dispatch(changeUser("oc"));
store.dispatch(changeUser("oct"));


store.dispatch({
    type: actions.FETCHED_REPOS,
    data: {
        value: [
            {
                "id": 18221276,
                "name": "git-consortium",
                "full_name": "octocat/git-consortium"                
              }
        ]
    }
});
*/



