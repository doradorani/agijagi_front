import {combineReducers, configureStore} from "@reduxjs/toolkit";
import tokenReducer from './slice/tokenSlice'
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';


const reducers = combineReducers({
    token : tokenReducer,
})

const persistConfig = {
    key: 'root',
    storage,                        //storage에 redux 상태값을 저장함
    whitelist : ['token']           //persist 시킬 리듀서들을 넣어주기
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, //직렬화 안하겠다 설정
        }),
})






