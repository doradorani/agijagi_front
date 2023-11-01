import moment from 'moment';
import token_config from './config/token_config';
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

const Refresh = async (config: AxiosRequestConfig, formData) => {
    const server = token_config.server;
    let accessTokenExpired = token_config.tokenExpired;

    //토큰 만료 시,
    if (moment(accessTokenExpired).diff(moment()) < 0) {
        try {
            const res = await axios.post(`${server}/user/newToken`);
            token_config.tokenName = res.data.accessToken;
        } catch (error) {
            console.log(error);
        }
    }
    config.data = formData;
    config.headers = config.headers ?? {};
    config.headers['Content-Type'] = 'multipart/form-data';
    config.headers.Authorization = `Bearer ${token_config.tokenName}`;
    return config;
};

export { Refresh };
