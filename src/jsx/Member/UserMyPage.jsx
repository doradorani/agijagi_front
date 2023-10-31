import React, { useEffect } from 'react';
import TokenApi from "../../js/api/TokenApi";
import token_config from "../../js/api/config/token_config";
import {tokenAction} from "../../js/api/redux_store/slice/tokenSlice";
import moment from "moment/moment";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {validationUser} from "../../js/api/ValidationApi";

const UserMyPage = () => {

    validationUser('test');

    // const tokenDispatch = useDispatch();    //useDispatch()를 통해 변경되는 값을 스토어로 전달한다.
    // const navigate = useNavigate();
    //
    //
    // useEffect(() => {
    //     const validationUser = async () => {
    //         try {
    //             await TokenApi.post('/user/myPage');   //TokenApi의 주소 + /user/myPage
    //             tokenDispatch(tokenAction.setTokenName(token_config.tokenName));
    //             tokenDispatch(tokenAction.setTokenExpired(moment().add(10, 'seconds').format("yyyy-MM-DD HH:mm:ss")));
    //         } catch (error) {
    //             if (error.response.status === 401) {
    //                 alert('올바르지 않은 토큰입니다.');
    //                 navigate('/');
    //             }
    //             if (error.response.status === 403) {
    //                 alert('관리자만 사용할 수 있습니다.');
    //                 navigate('/');
    //             }
    //             else {
    //                 // 다른 오류 처리
    //                 console.error('Error:', error);
    //             }
    //         }
    //     }
    //     validationUser()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
        <div>
            MyPage
            <br/>
            토큰 재발급
        </div>
    )
};

export default UserMyPage;


