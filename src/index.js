/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

import store from './store';
import actions from './actions/constants';

function changeUser(value) {
    return {
        type: actions.CHANGE_USERNAME,
        data: {
            value
        }
    } 
}
store.subscribe(() => {
    console.log(store.getState())
});

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



