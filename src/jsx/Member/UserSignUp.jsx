import React from 'react';
import token_config from "../../js/api/config/token_config";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {persistor} from "../../index";

const UserSignUp = () => {

    //로그아웃/ 로그인
    const tokenName = token_config.tokenName;
    const server = token_config.server;
    const navigate = useNavigate();

    const handleClick = async () => {
        const confirmLogout = window.confirm('정말 로그아웃 하시겠습니까?');

        if (confirmLogout) {
            try {
                await axios.post(`${server}/user/logOut`);
                await persistor.purge();
                navigate("/");

            } catch (error) {
                console.log('에러 : ' + error);
            }
        }
    };

    const handleClick2 = async () => {
        const confirmSignOut = window.confirm('정말 회원탈퇴 하시겠습니까?');

        if (confirmSignOut) {
            try {
                await axios.post(`${server}/user/signOut`);
                await persistor.purge();
                navigate("/");

            } catch (error) {
                console.log('에러 : ' + error);
            }
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps

    return (
        <div className="user_login_wrap">
            <div className="user_login_title yg_font">간편가입</div>
            <button className="kakao_login_box_btn">
                <div className="kakao_login_box">
                    <div className="user_login_img">
                        <img src="/test_imgs/png/kakao-talk.png" />
                    </div>
                    <div className="user_login_text_box yg_font">카카오로 시작하기</div>
                </div>
            </button>
        </div>
    );
};

export default UserSignUp;
