import { createStore } from 'redux';

import AppReducer from 'reducers/AppReducer';

const Store = createStore(
    AppReducer,
    window.devToolsExtension && window.devToolsExtension()
);

export default Store;
