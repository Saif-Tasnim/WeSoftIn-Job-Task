import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './features/dataSlicer'
import logger from './middlewares/logger'
// import logger from 'redux-logger'

export default configureStore({
    reducer: {
        storedData: dataReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})