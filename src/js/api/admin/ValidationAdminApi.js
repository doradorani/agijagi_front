import AdminTokenApi from './AdminTokenApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import adminToken_config from '../config/adminToken_config';
import moment from 'moment/moment';
import { adminTokenAction } from '../redux_store/slice/adminTokenSlice';

export function useValidationAdmin(method, url, formData) {
    const adminTokenDispatch = useDispatch();
    const navigate = useNavigate();

    return async () => {
        try {
            let response;

            // HTTP 메소드에 따라 다른 Axios 메서드를 호출
            if (method === 'post') {
                response = await AdminTokenApi.post(url, formData);
            } else if (method === 'delete') {
                response = await AdminTokenApi.delete(url);
            } else if (method === 'get') {
                response = await AdminTokenApi.get(url);
            } else if (method === 'put') {
                response = await AdminTokenApi.put(url, formData);
            } else {
                throw new Error('올바르지 않은 HTTP 메소드');
            }

            //const response = await AdminTokenApi.post(url, formData);

            adminTokenDispatch(adminTokenAction.setAdminTokenName(adminToken_config.adminTokenName));
            adminTokenDispatch(
                adminTokenAction.setAdminTokenExpired(moment().add(20, 'seconds').format('yyyy-MM-DD HH:mm:ss'))
            );
            return response.data; // 데이터 반환
        } catch (error) {
            console.log('error ==> ' + error);

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
