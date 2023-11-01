import axios from 'axios';
import { Refresh } from './Refresh';
import token_config from './config/token_config';

const TokenApi = axios.create({
    //baseURL: 'http://localhost:8088',
    baseURL: token_config.server,
    timeout: 10000,
    // params: {},
    headers: { 'Content-Type': 'application/json' },
});

TokenApi.interceptors.request.use(Refresh);

//TokenApi.interceptors.request.use(refresh, refreshErrorHandle);
// refresh
// 이 함수는 요청을 보내기 전에 실행되며, 만약 액세스 토큰이 만료된 경우 이 함수는 액세스 토큰을 갱신하기 위해 서버와 통신하게 됩니다.
// refreshErrorHandle => httpOnly로 막아서 스프링에서 삭제할 예정
// 이 함수는 요청이 실패할 때 실행되며, 주로 리프레시 토큰을 삭제하는 역할을 합니다.

export default TokenApi;
