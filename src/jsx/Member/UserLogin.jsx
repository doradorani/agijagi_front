import React, {useEffect} from 'react';
import '../../css/member/userLogin.css';
import token_config from "../../js/api/config/token_config";
import {useDispatch} from "react-redux";
import {tokenAction} from "../../js/api/redux_store/slice/tokenSlice";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import moment from "moment";
import {KAKAO_AUTH_URL} from "../../js/api/OAuth";

const UserLogin = ({ isLoggedIn }) => {

    return (
        <div className="user_login_wrap">
            <div className="user_login_title yg_font">로그인</div>
            <button className="kakao_login_box_btn">
                <div className="kakao_login_box">
                    <div className="user_login_img">
                        <img src="/test_imgs/png/kakao-talk.png" />
                    </div>
                    <div className="user_login_text_box yg_font">
                        <a href={KAKAO_AUTH_URL}>카카오로 시작하기</a>
                    </div>
                </div>
            </button>
            <div className="link_to_sign_up yg_font">
                아직 아기자기 계정이 없나요?&nbsp;&nbsp;&nbsp;
                <a href="/user_sign_up">회원가입</a>
            </div>
        </div>
    );
};

export default UserLogin;
