import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import issues from './issues/issues.reducer'
import categories from './category/category.reducer'
import comments from './comments/comments.reducer'
import auth from './auth/AuthReducer'
import {createLogger} from 'redux-logger'

const aut = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};
const initialState = {


}
const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const reducers = combineReducers({
    auth,
    categories,
    issues,
    comments
  });

const Store = createStore(reducers, initialState, enhancer);

export default Store;