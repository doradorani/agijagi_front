import AdminTokenApi from './AdminTokenApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { tokenAction } from '../redux_store/slice/tokenSlice';
import adminToken_config from '../config/adminToken_config';
import moment from 'moment/moment';

export function useValidationAdmin(url, formData) {

    const tokenDispatch = useDispatch();
    const navigate = useNavigate();

    return async () => {
        try {

            console.log('ValidationAdminApi');

            const response = await AdminTokenApi.post(url, formData);
            tokenDispatch(tokenAction.setTokenName(adminToken_config.tokenName));
            tokenDispatch(tokenAction.setTokenExpired(moment().add(20, 'seconds').format('yyyy-MM-DD HH:mm:ss')));
            return response.data; // 데이터 반환
        } catch (error) {
            if (error.response.status === 401) {
                alert('관리자 로그인을 부탁드립니다.');
                navigate('/admin/sign_in');
                throw error;
            } else if (error.response.status === 403) {
                alert('관리자만 사용할 수 있습니다.');
                navigate('/');
                throw error;
            } else {
                // 다른 오류 처리
                console.error('Error:', error);
                navigate('/');
                throw error;
            }
        }
    };
}
