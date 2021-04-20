import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { phoneWordsReducer } from './reducer'

const store = createStore(phoneWordsReducer, applyMiddleware(thunk))

export default store
