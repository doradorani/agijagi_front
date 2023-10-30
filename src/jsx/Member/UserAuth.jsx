import React, {useEffect} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";
import {tokenAction} from "../../js/api/redux_store/slice/tokenSlice";
import {useNavigate} from "react-router-dom";
import moment from "moment";// npm install moment
import token_config from "../../js/api/config/token_config";

const UserAuth = (props) => {

    //받아온 주소의 인가코드를 추출한다.
    const code = new URL(window.location.href).searchParams.get("code");
    const server = token_config.server;
    const navigate = useNavigate()
    const tokenDispatch = useDispatch();    //useDispatch()를 통해 변경되는 값을 스토어로 전달한다.

    useEffect(() => {
        const kakaoLogin = async () => {
            console.log({code});
            await axios
                .post(`${server}/kakao/login?code=${code}`)
                .then((res) => {

                    tokenDispatch(tokenAction.setTokenName(res.data.accessToken));
                    tokenDispatch(tokenAction.setTokenExpired(moment().add(10, 'seconds').format("yyyy-MM-DD HH:mm:ss")));

                    if(res.data.newUser > 0){
                        alert('회원가입!!');
                    }
                    else{
                        alert('기존 회원');
                    }

                    navigate("/");
                })
        }
        kakaoLogin()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code])

    // 위의 주석은 useEffect 의존성을 안보이게하는 코드

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