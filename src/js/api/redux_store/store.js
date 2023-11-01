import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import tokenReducer from './slice/tokenSlice'
import adminTokenReducer from './slice/adminTokenSlice'
import userStateReducer from './slice/userLoginSlice'
import adminStateReducer from './slice/adminLoginSlice'


const reducers = combineReducers({
    token : tokenReducer,
    adminToken : adminTokenReducer,
    userLogin : userStateReducer,
    adminLogin : adminStateReducer,
})

const persistConfig = {
    key: 'root',
    storage,                        //storage에 redux 상태값을 저장함
    //persist 시킬 리듀서들을 넣어주기
    whitelist : ['token', 'adminToken', 'userLogin', 'adminLogin']
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, //직렬화 안하겠다 설정
        }),
})






