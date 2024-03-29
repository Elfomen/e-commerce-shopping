import { compose , createStore , applyMiddleware } from 'redux'

import logger from 'redux-logger'
import { rootReducer } from './root_reducer'
import { persistStore , persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const loggerMiddleWare = (store) => (next) => (action) => {
    if(!action.type){
        return next(action)
    }   

    console.log('type' , action.type)
    console.log('payload' , action.payload)
    console.log('current state' , store.getState())

    next(action)

    console.log('next state' , store.getState())

}

const middleWares = [ process.env.NODE_ENV === 'development' && logger].filter(Boolean) // any time you dispatch an action, it first hit the middle ware befor hitting the state

const persistConfig = {
    key: 'root' , 
    storage , 
    blacklist: ['user']
}

const persistedReducer = persistReducer(
    persistConfig , 
    rootReducer
)

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer , undefined , composedEnhancers)


export const persistor = persistStore(store)