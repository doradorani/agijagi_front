import AdminTokenApi from './AdminTokenApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import adminToken_config from '../config/adminToken_config';
import moment from 'moment/moment';
import { adminTokenAction } from '../redux_store/slice/adminTokenSlice';
import Swal from 'sweetalert2';
import adminLogin_config from '../config/adminLogin_config';

export function useValidationAdminItem() {
    const adminTokenDispatch = useDispatch();
    const navigate = useNavigate();

    //만약 서버 문제로 로그아웃 되었지만, 토큰은 남은 경우
    if (!adminLogin_config.state && adminToken_config.adminTokenName) {
        adminTokenDispatch(adminTokenAction.setAdminTokenName(''));
        adminTokenDispatch(adminTokenAction.setAdminTokenExpired(''));
        Swal.fire({
            title: '서버 문제로 로그아웃 되었습니다.',
            text: '다시 로그인해주세요.',
            icon: 'warning',
            confirmButtonText: '확인',
        });
        return () => {};
    }

    const validateAdmin = async (method, url, formData) => {
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

            adminTokenDispatch(adminTokenAction.setAdminTokenName(adminToken_config.adminTokenName));
            adminTokenDispatch(
                adminTokenAction.setAdminTokenExpired(moment().add(20, 'seconds').format('yyyy-MM-DD HH:mm:ss'))
            );

            return response.data; // 데이터 반환
        } catch (error) {
            console.log('error ==> ' + error);

            if (error.response.status === 401) {
                Swal.fire({
                    title: '관리자 로그인이 필요한 기능입니다.',
                    icon: 'warning',
                });
                navigate('/admin/sign_in');
                throw error;
            } else if (error.response.status === 403) {
                Swal.fire({
                    title: '관리자 전용 기능입니다.',
                    icon: 'warning',
                });
                navigate('/');
                throw error;
            } else {
                // 다른 오류 처리
                console.error('Error:', error);
                navigate('/admin/sign_in');
                throw error;
            }
        }
    };

    return validateAdmin;
}
