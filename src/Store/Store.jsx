import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './Reducers/index'
import thunk from 'redux-thunk'
import * as storage from 'redux-storage'
// import { createStore, applyMiddleware, combineReducers }from 'redux';
import createEngine from 'redux-storage-engine-localstorage'
import { handleSetState } from './Actions'
import type from './Type'

const { LOGIN_USER, UPDATE_USER } = type

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const reducer = storage.reducer(rootReducer)
const engine = createEngine('treeprite-key')
const middleware = storage.createMiddleware(engine, [], [ LOGIN_USER, UPDATE_USER ])
// const createStoreWithMiddleware = composeEnhancers(applyMiddleware(thunk, middleware)(createStore))
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk, middleware)))
// const store = createStoreWithMiddleware(reducer)
const load = storage.createLoader(engine)
load(store)
  .then((newState) => store.dispatch(handleSetState(newState)))
  .catch(() => console.log('Failed to load previous state'))

export default store
