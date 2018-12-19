/**
 * Dependencies
 */
import { createStore, applyMiddleware, compose } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

/**
 * Reducers
 */
import rootReducer from '../reducers';

/**
 * Create an instance of the logger middleware
 */
const logger = createLogger({ collapsed: true });

/**
 * Create the devtools middleware
 */
const devTools =
    typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f;

/**
 * Export a function that
 * creates a store with
 * an optional initial state
 */
export default function configureStore(initialState) {
    /**
     * Compose a store creator function with middleware
     */
    const finalCreateStore = compose(
        applyMiddleware(thunk, logger),
        devTools
    )(createStore);

    /**
     * Create the actual store
     */
    const store = finalCreateStore(rootReducer, initialState);

    /**
     * Return the store
     */
    return store;
}
