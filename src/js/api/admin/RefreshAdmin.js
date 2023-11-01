import moment from 'moment';
import adminToken_config from '../config/adminToken_config';
import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

const RefreshAdmin = async (config: AxiosRequestConfig, formData) => {
    const server = adminToken_config.server;
    let adminAccessTokenExpired = adminToken_config.tokenExpired;

    //토큰 만료 시,
    if (moment(adminAccessTokenExpired).diff(moment()) < 0) {
        try {
            const res = await axios.post(`${server}/admin/newToken`);
            adminToken_config.tokenName = res.data.accessToken;
        } catch (error) {
            console.log(error);
        }
    }
    config.data = formData;
    config.headers = config.headers ?? {};
    config.headers['Content-Type'] = 'multipart/form-data';
    config.headers.Authorization = `Bearer ${adminToken_config.tokenName}`;
    return config;
};

export { RefreshAdmin };
