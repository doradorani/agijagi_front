import React from "react";

const UserSignUp = () => {
    return(
        <div className="user_login_wrap">
            <div className="user_login_title yg_font">
                간편가입
            </div>
            <button className="kakao_login_box_btn">
            <div className="kakao_login_box">
                <div className="user_login_img">
                    <img src="/test_imgs/png/kakao-talk.png" />
                </div>
                <div className="user_login_text_box yg_font">
                    카카오로 시작하기
                </div>
            </div>
            </button>
        </div>
    );
};

export default UserSignUp;