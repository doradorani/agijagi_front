import React from 'react';
import {useKakaoLogin} from "../../js/api/LoginApi";

const UserAuth = (props) => {

    //받아온 주소의 인가코드를 추출한다.
    const code = new URL(window.location.href).searchParams.get("code");

    // 커스텀 훅 사용
    useKakaoLogin(code);

    return (
        <div className="LoginHandeler">
            <div className="notice">
                <h1>Auth Page</h1>
                <p>로그인 중입니다.</p>
                <p>잠시만 기다려주세요.</p>
            </div>
        </div>
    );
};

export default UserAuth;