import React from 'react';
import '../../css/member/userLogin.css';

const UserLogin = ({ isLoggedIn }) => {
    return (
        <div className="user_login_wrap">
            <div className="user_login_title yg_font">로그인</div>
            <button className="kakao_login_box_btn">
                <div className="kakao_login_box">
                    <div className="user_login_img">
                        <img src="/test_imgs/png/kakao-talk.png" />
                    </div>
                    <div className="user_login_text_box yg_font">카카오로 시작하기</div>
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
