import TokenApi from './TokenApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { tokenAction } from './redux_store/slice/tokenSlice';
import token_config from './config/token_config';
import moment from 'moment/moment';
import Swal from 'sweetalert2';
import userLogin_config from './config/userLogin_config';
import { userStateAction } from './redux_store/slice/userLoginSlice';

export function useValidationItem() {
    const tokenDispatch = useDispatch();
    const navigate = useNavigate();

    //만약 서버 문제로 로그아웃 되었지만, 토큰은 남은 경우
    if (!userLogin_config.state && token_config.tokenName) {
        tokenDispatch(tokenAction.setTokenName(''));
        tokenDispatch(tokenAction.setTokenExpired(''));
        Swal.fire({
            title: '서버 문제로 로그아웃 되었습니다.',
            text: '다시 로그인해주세요.',
            icon: 'warning',
            confirmButtonText: '확인',
        });
        return () => {};
    }

    const validateUser = async (method, url, formData) => {
        try {
            let response;

            // HTTP 메소드에 따라 다른 Axios 메서드를 호출
            if (method === 'post') {
                response = await TokenApi.post(url, formData);
            } else if (method === 'delete') {
                response = await TokenApi.delete(url);
            } else if (method === 'get') {
                response = await TokenApi.get(url);
            } else if (method === 'put') {
                response = await TokenApi.put(url, formData);
            } else {
                throw new Error('올바르지 않은 HTTP 메소드');
            }

            tokenDispatch(tokenAction.setTokenName(token_config.tokenName));
            tokenDispatch(
                tokenAction.setTokenExpired(moment().add(4, 'minutes').add(50, 'seconds').format('yyyy-MM-DD HH:mm:ss'))
            );

            return response.data; // 데이터 반환
        } catch (error) {
            if (error.response.status === 401) {
                Swal.fire({
                    title: '로그인이 필요한 기능입니다.',
                    icon: 'warning',
                });
                navigate('/');
                //throw error;
            } else if (error.response.status === 403) {
                Swal.fire({
                    title: '사용자 전용기능입니다.',
                    icon: 'warning',
                });
                navigate('/');
                //throw error;
            } else {
                // 다른 오류 처리
                console.error('Error:', error);
                navigate('/');
                //throw error;
            }
        }
    };

    return validateUser;
}
