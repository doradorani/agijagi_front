import { useEffect } from 'react';
import token_config from './config/token_config';
import axios from 'axios';
import { tokenAction } from './redux_store/slice/tokenSlice';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userStateAction } from './redux_store/slice/userLoginSlice';
import userLogin_config from './config/userLogin_config';
import { userInfoAction } from './redux_store/slice/userInfoSlice';
import { userCobuyAction } from './redux_store/slice/userCobuySlice';
import Swal from 'sweetalert2';
import { useValidationItem } from './VlidationItem';

export function useKakaoLogin(code) {
    const tokenDispatch = useDispatch();
    const userLoginDispatch = useDispatch();
    const navigate = useNavigate();
    const validateMyCobuy = useValidationItem();

    useEffect(() => {
        const server = token_config.server;

        const kakaoLogin = async () => {
            try {
                const response = await axios.post(`${server}/kakao/login?code=${code}`);

                tokenDispatch(tokenAction.setTokenName(response.data.accessToken));
                tokenDispatch(tokenAction.setTokenExpired(moment().add(2, 'hours').format('yyyy-MM-DD HH:mm:ss')));
                userLoginDispatch(userStateAction.setState(true));

                userLoginDispatch(
                    userInfoAction.setUserInfo({
                        userName: response.data.userName,
                        userEmail: response.data.userEmail,
                        userNickname: response.data.userNickname,
                        userProfile: response.data.img || '/test_imgs/png/profile.png',
                    })
                );

                if (response.data.newUser > 0) {
                    navigate('/user_info');
                    Swal.fire(
                        '회원가입을 축하합니다!!',
                        '어서오세요 ' + response.data.userNickname + '님!!',
                        'success'
                    );
                } else {
                    try {
                        validateMyCobuy('get', '/coBuy/myCobuy').then((res) => {
                            userLoginDispatch(userCobuyAction.setFund(res.data.myFundings));
                            userLoginDispatch(userCobuyAction.setHit(res.data.myHits));
                        });
                    } catch (error) {
                        console.log(error);
                    }
                    navigate('/');
                    Swal.fire(response.data.userNickname + '님', '어서오세요!!', 'success');
                }
            } catch (error) {
                console.error('Kakao login error:', error);
            }
        };

        kakaoLogin();
    }, [code, tokenDispatch, navigate]);

    return null;
}
