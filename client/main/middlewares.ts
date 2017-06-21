import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'

// const logger = createLogger();

const rootMiddlewares = compose(
    applyMiddleware(thunk),
    (window as any) && (window as any).__REDUX_DEVTOOLS_EXTENSION__  ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ () : f => f
);

export default rootMiddlewares;
