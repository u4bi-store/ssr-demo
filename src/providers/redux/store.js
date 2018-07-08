import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootEpics from './epics';
import rootReducers from './reducers';

export const configureStore = _ => {

    const epicMiddleware = createEpicMiddleware();

    const store = createStore(
        combineReducers({
            ...rootReducers
        }),
        applyMiddleware(
            epicMiddleware
        )
    );

    epicMiddleware.run(rootEpics);

    if (module.hot) {

        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers').default;
            store.replaceReducer(nextRootReducer);
        });

    }

    return store;
};