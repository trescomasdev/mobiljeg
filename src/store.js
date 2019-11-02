import { applyMiddleware, createStore} from 'redux'
// import { logger } from "redux-logger"
import thunk from 'redux-thunk'
import promise from "redux-promise-middleware"
import { routerMiddleware } from 'react-router-redux'

import history from './history'
import reducer from "./reducers"

// Build the middleware for intercepting and dispatching navigation actions
const routeMiddleware = routerMiddleware(history)

const middleware = applyMiddleware(promise(), thunk, routeMiddleware)

export default createStore(reducer, middleware)
